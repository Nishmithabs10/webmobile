from django.shortcuts import render,get_object_or_404,redirect
from django.http import HttpResponse,JsonResponse
from django.template import loader 
from django.contrib import messages
from django.core import serializers
import json
import stripe
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

# from .models import Product
stripe.api_key = settings.STRIPE_SECRET_KEY
# Create your views here.
from .models import Product
from .forms import EnquiryForm



def home(request):
    return render(request, 'index.html')
@login_required
def contact(request):
    return render(request,'contact.html')
@login_required
def about(request):
    return render(request,'about.html')


    # mobiles = Mobile.objects.all()
    # return render(request, 'mobiles_list.html', {'mobiles': mobiles})

def enquiry(request):
    if request.method == 'POST':
        form = EnquiryForm(request.POST)
        if form.is_valid():
            form_data = form.cleaned_data
            form.save()  # Save form data to the database
            success_message = (
                f"Thank you, {form_data['first_name']}! We have received your enquiry about "
                f"{form_data['product']} and will get back to you soon. Here are the details we received: "
                f"Last Name: {form_data['last_name']}, Mobile: {form_data['mobile']}, "
                f"Email Address: {form_data['email_address']}, Enquiry Message: {form_data['enquiry_message']}"
            )
            messages.success(request, success_message)
            return redirect('enquiry_success')  # Redirect to success page
        else:
             messages.error(request, 'Please correct the errors below.')
             return render(request, 'enquiry.html', {'form': form})
    else:
        form = EnquiryForm()

    return render(request, 'enquiry.html', {'form': form})

def enquiry_success(request):
    return render(request, 'enquiry_success.html')

def productEnquiry(request):
    if request.method=='POST':
        print(request.POST)
    return JsonResponse({'status':'success'})    

#   EnquiryFormData=EnquiryForm(request.POST)
#         if EnquiryFormData.is_valid():
#             print(EnquiryFormData.cleaned_data)
#             messages.success(request,'thankyou for your enquiry.we will get back you shortly.')
#             return render(request,'please correct the errors below.')
# def products(request):
#     products_from_db = product.objects.all()
#     products_from_db=serializers.serialize('json',product.objects.all())
#     # products_list = json.loads(products_from_db)
#     # print(products_list)
   

#     # return JsonResponse(products_list,safe=False) 

#     return JsonResponse(products_from_db, safe=False) 

def products(request):
    products_from_db = Product.objects.all()
    products_from_db = serializers.serialize('json', products_from_db)
    products_list = json.loads(products_from_db)  # Convert JSON string to list
    return JsonResponse(products_list, safe=False)
@login_required
def product_detail(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    return render(request, 'product-details.html', {'product': product})


def payment_options(request, product_id):
    product = get_object_or_404(Product, pk=product_id) 
    return render(request, 'payment_form.html', {
        'product': product,
        'publishable_key': settings.STRIPE_PUBLISHABLE_KEY  # Pass the publishable key to the template
    })
    
    # return render(request, 'payment_options.html', {'product': product})

def payment_form(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    publishable_key = settings.STRIPE_PUBLISHABLE_KEY
    
    # Render the payment form template
    return render(request, 'payment_form.html', {'product': product})

@csrf_exempt
def charge(request):
    if request.method == 'POST':
        token = request.POST.get('stripeToken')
        amount = 1000  # Amount in cents, e.g., $10.00

        try:
            charge = stripe.Charge.create(
                amount=amount,
                currency='usd',
                description='Example charge',
                source=token,
            )
            return redirect('payment_success')  # Redirect to a success page
        except stripe.error.CardError as e:
            # Handle the error
            return redirect('payment_error')  # Redirect to an error page

    return redirect('payment_form')

