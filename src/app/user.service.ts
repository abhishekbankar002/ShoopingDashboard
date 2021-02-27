import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';import { environment } from 'src/environments/environment';
;


@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserService {
  public products:any=[];
  public url="";
  public imgurl={};
  public cartImage=new Array();
  public cartProducts=new Array();
  public carthistoryImage=new Array();
  public carthistoryProducts=new Array();
  public quantity=new Array();
  public details:any={};
  public obj:any={};
  public prod=new Array();
  public email=new Array();
  public carthistoryquantity=new Array();
  constructor(private http:HttpClient) {
  }
  getApi(section:string){
    return this.http.get(environment.serverurl+"/api/"+section+"/")
  }
  card(imageurl:string){
    this.url=imageurl;
    console.log(this.url);
  }
  product(){
    console.log(this.url);
    return this.url;
  }
  getProductDetails(img:string){;
    this.imgurl={obj:img};
    this.prod=[];
    this.http.post(environment.serverurl+"/api/product/",this.imgurl).subscribe((res:any)=>{
      this.prod.push(res['response']);
      console.log(this.prod); 
    }
    ); 
    return(this.prod);
  }
  addcart(cartproducts:any,img:any,quantity:any)
  {
    this.cartProducts.push(cartproducts);
    this.cartImage.push(img);
    this.quantity.push(quantity);
    // console.log(this.cartProducts);
    console.log(this.cartImage);
    console.log(this.quantity);
  }
  cartquantity(){
    return this.quantity;
  }
  cartdetails(){
    // this.cartProducts.push(this.cartImage);
    console.log(this.cartProducts);
    return this.cartProducts;
  }
  cartImages(){
    console.log(this.cartImage);
    return this.cartImage;
    }
  getprofile(email){
    this.email=email;
    console.log(this.email);
  }
  profiledetails(){
    console.log(this.email);
    return this.email;
  }
  carthistory(productdetails,image,quantity){
    console.log(this.email);
    console.log(productdetails);
    console.log(image);
    this.obj={'obj':this.email,'product':productdetails,'image':image,'quantity':quantity};
    console.log(this.obj);
    this.http.put(environment.serverurl+"/api/cart/",this.obj).subscribe((res:any)=>{
      console.log(res);
    });
  }
  displaycarthistory(productdetails,image,quantity){
    this.carthistoryProducts=[];
    this.carthistoryProducts=(productdetails);
    this.carthistorydetails();
    this.carthistoryImage=[];
    this.carthistoryImage=(image);
    // console.log(this.cartImage);
    this.carthistoryImages();
    this.carthistoryquantity=[];
    this.carthistoryquantity=(quantity);
    this.historyquantity();
    return;
  }
  carthistorydetails(){
    return this.carthistoryProducts;
  }
  carthistoryImages(){
    return this.carthistoryImage;
  }
  historyquantity(){
    return this.carthistoryquantity;
  }
}