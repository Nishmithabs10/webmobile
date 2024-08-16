from django import forms
from.models import Enquiry

class EnquiryForm(forms.ModelForm):
     class Meta:
            model = Enquiry
            fields = ['first_name', 'last_name', 'mobile', 'email_address', 'product', 'enquiry_message']
            widgets = {
            'first_name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your first name'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your last name'}),
            'mobile': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your mobile number'}),
            'email_address': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email address'}),
            'product': forms.Select(choices=Enquiry.PRODUCT_CHOICES, attrs={'class': 'form-control'}),
            'enquiry_message': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Enter your message'}),
        }
    # first_name = forms.CharField(label="first_name",max_length=100,required=True,widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your first name'}))
    # last_name = forms.CharField(label="last_name",max_length=100,required=True,widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your last name'}))
    # mobile=forms.CharField(label="Mobile",max_length=10, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your mobile number'}))
    # email_address = forms.EmailField(label="email-address",max_length=100,required=True,widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email address'}))
    # product=forms.CharField(label="products",max_length=100, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter the product name'}))
    # enquiry_message=forms.CharField(label="Enquiry Message",widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Enter your message'}))

    # first_name = forms.CharField(label="first_name",max_length=100,required=True,widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your first name'}))
    # last_name = forms.CharField(label="last_name",max_length=100,required=True,widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your last name'}))
    # mobile=forms.CharField(label="Mobile",max_length=10, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter your mobile number'}))
    # email_address = forms.EmailField(label="email-address",max_length=100,required=True,widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email address'}))
    # product=forms.CharField(label="products",max_length=100, widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Enter the product name'}))
    # enquiry_message=forms.CharField(label="Enquiry Message",widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Enter your message'}))