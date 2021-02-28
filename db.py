import json

# def readDB(filename):
#     with open(filename,mode='r') as jsonFile:
#         data= json.load(jsonFile)
    
#     return data

# def writeDB(obj,loc,filename):
#     with open(filename,mode='r') as jsonFile:
#         data=json.load(jsonFile)
#         for user in data['database']:
#             if(user['email']==obj['email']):
#                 return("Not Created")

#         data['database'].append(obj)

#         with open(filename,mode='w') as f:
#             json.dump(data,f)
#         return("Created")

# def Login_DB(obj,loc,filename):
#     with open(filename,mode='r') as jsonFile:
#         data=json.load(jsonFile)
#         for user in data['database']:
#             if(user['email']==obj['email']):
#                 if(user['password']==obj['password']):
#                     return(["True",user['name']])
        
#         return("False")

from django.http import HttpResponse,JsonResponse
import pymongo
from bson import ObjectId
import jwt
from django.conf import settings

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["mydb"]

users = mydb['MyCollection']

products= mydb['ProductDetails']


def readDB(filename):
    with open(filename,mode='r') as jsonFile:
        data= json.load(jsonFile)
    
    return data

def writeDB(obj,loc,filename):
    userinfo=users.find()
    for user in userinfo:
        if(user['email']==obj['email']):
             return("Not Created","")
    users.insert_one(obj)
    return("Created",obj['email'])


def Login_DB(obj,loc,filename):
    userinfo=users.find()
    for user in userinfo:
        if(user['email']==obj['email']):
            if(user['password']==obj['password']):
                # token=jwt.encode(
                #     {
                #         'email':obj['email'],
                #     },
                #     settings.SECRET_KEY,
                #     algorithm="HS256"
                # )
                # return(["True",token])
                return("True",user["email"])
    return("False",obj['email'])

def readProd(str):
    productlist=[]
    productdetails=[]
    productprice=[]
    prod=products.find()
    for section in prod:
        if(section['section']==str):
            productprice.append(section['price'])
            productdetails.append(section['name'])
            productlist.append(section['url'])
    return(productlist,productdetails,productprice)

def details(obj):
    proddetails=[]
    url=obj
    # req=request.body
    detail=products.find()
    for Products in detail:
        if(Products['url']==url):
            proddetails.append(Products['price'])
            proddetails.append(Products['name'])
            # return('True')
    # proddetails.append(detail['price'])
    # proddetails.append(detail['name'])
    return(proddetails)

def profileinfo(obj):
    userinfo=users.find()
    mail=obj
    for user in userinfo:
        if(user['email']==mail):
            return(user['name'],user['number'])
    return("","")


def cart(obj):
    userinfo=users.find()
    mail=obj['obj'][0]
    productdetails=obj['product']
    image=obj['image']
    quantity=obj['quantity']
    for user in userinfo:
        if(user['email']==mail):
            users.update_one({'email':mail},{"$set":{"productdetails":productdetails}})
            users.update_one({'email':mail},{"$set":{"image":image}})
            users.update_one({'email':mail},{"$set":{"quantity":quantity}})
            return("true")
    return("false")

def order(obj):
    userinfo=users.find()
    mail=obj['obj'][0][0] 
    for user in userinfo:
        if(user['email']==mail):
            return(user['image'],user['productdetails'],user['quantity'])
    return("","","")