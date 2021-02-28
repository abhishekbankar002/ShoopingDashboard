"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from . import views
from django.urls import path,include

urlpatterns = [
    path("api/user/",views.newUser,name="user"),
    path("api/userlogin/",views.userLogin,name="login"),
    path("api/men/",views.productMens,name="productsmen"),
    path("api/Womens/",views.productWomens,name="productswomen"),
    path("api/Watches/",views.productWatches,name="productswatches"),
    path("api/product/",views.productdetails,name="productDetails"),
    path("api/profile/",views.profiledetails,name="profileDetails"),
    path("api/cart/",views.carthistory,name="cartDetails"),
    path("api/orderhistory/",views.orderhistory,name="historyDetails"),
    path("api/home/",views.producthome,name="home"),
]
