from django.contrib import admin

# Register your models here.
from django.db import models

from .models import Product,Enquiry
# Create your models here.
# class Mobile(models.Model):
#     name = models.CharField(max_length=100)
#     brand = models.CharField(max_length=50)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     description = models.TextField()
#     image = models.ImageField(upload_to='mobiles/')
    
    
    # def __str__(self):
    #     return self.name
# @admin.register(product)
# class MobileAdmin(admin.ModelAdmin):
#     list_display = ('name', 'brand', 'price', 'description', 'image')
    
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'price', 'description', 'image')
    
    
    
    
    
@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email_address', 'mobile', 'product', 'enquiry_message', 'submitted_at')

# class Enquiry(models.Model):
#     PRODUCT_CHOICES=(
#         ("Mobile 1","Mobile 1"),
#         ("Mobile 2","Mobile 2"),
#         ("Mobile 3","Mobile 3"),
#     )
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     email_address = models.EmailField(max_length=100)
#     mobile = models.CharField(max_length=15)
#     product = models.CharField(choices=PRODUCT_CHOICES,max_length=20)
#     enquiry_message = models.TextField(max_length=1000)
#     submitted_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.first_name} {self.last_name} - {self.product} "

# from django.contrib import admin
# from .models import Mobile, Enquiry

# @admin.register(Mobile)
# class MobileAdmin(admin.ModelAdmin):
#     list_display = ('name', 'brand', 'price', 'description', 'image')
#     search_fields = ('name', 'brand')
#     list_filter = ('brand', 'price')
#     ordering = ('-price',)

#     # Optional: Adding a preview of the image in the list view
#     def image_preview(self, obj):
#         if obj.image:
#             return f'<img src="{obj.image.url}" style="width: 100px; height: auto;" />'
#         return 'No Image'
#     image_preview.allow_tags = True
#     image_preview.short_description = 'Image Preview'

# @admin.register(Enquiry)
# class EnquiryAdmin(admin.ModelAdmin):
#     list_display = ('first_name', 'last_name', 'email_address', 'product', 'submitted_at')
#     search_fields = ('first_name', 'last_name', 'email_address', 'product')
#     list_filter = ('product', 'submitted_at')
#     ordering = ('-submitted_at',)

#     # Optional: Adding a preview of the enquiry message in the list view
#     def enquiry_message_preview(self, obj):
#         return obj.enquiry_message[:75] + '...' if len(obj.enquiry_message) > 75 else obj.enquiry_message
#     enquiry_message_preview.short_description = 'Enquiry Message'

