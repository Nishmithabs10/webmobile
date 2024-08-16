from django.urls import path
from .views import home
from.import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.decorators import login_required



urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', views.contact, name='contact'),
     path('about/', views.about, name='about'),
     path('enquiry/', views.enquiry, name='enquiry'),
      path('enquiry_success/', views.enquiry_success, name='enquiry_success'),
      path('product-enquiry/',views.productEnquiry,name='product-enquiry'),
      path('products/',views.products,name='products'),
      path('products/<int:product_id>/', views.product_detail, name='product-detail'),
      path('payment/<int:product_id>/', views.payment_options, name='payment-options'),
      path('payment-form/<int:product_id>/',views.payment_form, name='payment-form'),
      
      
     
     
 ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)