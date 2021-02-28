from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import json

DB=settings.DB_FILE

from db import writeDB,readDB,Login_DB,readProd,details,profileinfo,cart,order
# from db import 

@csrf_exempt
def newUser(request):


    if request.method == "POST":
        dicObj=json.loads(request.body)
        if(dicObj['add']=='true'):
            o=dicObj['obj']
            flag,username=writeDB(obj=o,loc='loc',filename=DB)
            if(flag=="Created"):
                return JsonResponse({"request":"New User Created",'username':username})
            elif(flag=="Not Created"):
                return JsonResponse({"request":"User Email already exists",'username':""})
        
        # else:
        #     return JsonResponse({"request":"User email already exists"})
        

    elif request.method=="GET":
        data= readDB(filename=DB)
        req=data["database"]
        # req=req.split()
        res=['database',req]

        return JsonResponse(res,safe=False)

@csrf_exempt
def userLogin(request):
    # if request.method=="PUT":
    dicObj=json.loads(request.body)
    o=dicObj['obj']
    flag="False"
    flag,username=Login_DB(obj=o,loc='loc',filename=DB)
    if(flag=="True"):
        return JsonResponse({'request':'1','username':username}) #Loggend In
    elif(flag=="False"):
        return JsonResponse({'request':'0','username':username}) #Wrong Credentials

@csrf_exempt
def productMens(request):
    products,details,price=readProd('Mens')
    return JsonResponse({'response':products,'detailname':details,'detailprice':price})

@csrf_exempt
def productWomens(request):
    products,details,price=readProd('Womens')
    return JsonResponse({'response':products,'detailname':details,'detailprice':price})

@csrf_exempt
def productWatches(request):
    products,details,price=readProd('Watches')
    return JsonResponse({'response':products,'detailname':details,'detailprice':price})

@csrf_exempt
def productdetails(request):
    url=json.loads(request.body)
    img=url['obj']
    productdetail=details(obj=img)
    return JsonResponse({'response':productdetail})

@csrf_exempt
def profiledetails(request):
    mail=json.loads(request.body)
    email=mail['obj'][0][0]
    name,number=profileinfo(obj=email)
    return JsonResponse({'name':name,'number':number})

@csrf_exempt
def carthistory(request):
    mail=json.loads(request.body)
    # email=mail['obj'][0][0]
    response=cart(obj=mail)
    return JsonResponse({'res':response})

@csrf_exempt
def orderhistory(request):
    mail=json.loads(request.body)
    image,productdetails,quantity=order(obj=mail)
    return JsonResponse({'image':image,'productdetails':productdetails,'quantity':quantity})

@csrf_exempt
def producthome(request):
    products,details,price=readProd('home')
    return JsonResponse({'response':products,'detailname':details,'detailprice':price})