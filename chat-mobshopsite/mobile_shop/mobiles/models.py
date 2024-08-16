from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
     user=models.ForeignKey('auth.user',on_delete=models.CASCADE)
     name = models.CharField(max_length=100)
     brand = models.CharField(max_length=50)
     price = models.DecimalField(max_digits=10, decimal_places=2)
     description = models.TextField()
     image = models.ImageField(upload_to='mobiles/')
     
    
    
     def __str__(self):
        return self.name


class Enquiry(models.Model):
    PRODUCT_CHOICES=(
        ("Mobile 1","Mobile 1"),
        ("Mobile 2","Mobile 2"),
        ("Mobile 3","Mobile 3"),
    )
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email_address = models.EmailField(max_length=100)
    mobile = models.CharField(max_length=15)
    product = models.CharField(choices=PRODUCT_CHOICES,max_length=20)
    enquiry_message = models.TextField(max_length=1000)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.product} "

