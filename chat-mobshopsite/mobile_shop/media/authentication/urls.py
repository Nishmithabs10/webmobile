from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
     path('product/<int:product_id>/', views.product_detail, name='product_detail'),
   # Example protected vie
]
