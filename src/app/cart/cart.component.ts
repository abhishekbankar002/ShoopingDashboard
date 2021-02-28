import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeWebPlugin } from '@capacitor/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {


  public productDetails=new Array();
  public Image=new Array;
  public quantity=new Array();
  public removeproductname="";
  public removeproductprice="";
  public removeimage="";
  public subtotal=0;
  public tax=0;
  public total=0;
  public dummy=0;
  public i=0;
  constructor(public userService: UserService,
  public router:Router,
  ) 
  {
    this.productDetails=[];
    this.Image=[];
    this.quantity=[];

    this.productDetails=this.userService.cartdetails();
    this.Image=this.userService.cartImages();
    this.quantity=this.userService.cartquantity();
    // console.log(this.productDetails);
    // console.log(this.Image);
    for(let product of this.productDetails){
    this.dummy=(Number(product[0][0]))*this.quantity[this.i];
    this.subtotal=((this.subtotal)+(this.dummy));
    this.i=this.i+1;
  }
    this.tax=Number(((12/100)*this.subtotal).toFixed(2));
    this.total=this.subtotal+this.tax;
    // console.log(this.subtotal);
   }
   
   clearcart(){
     this.total=0.0;
     this.subtotal=0;
     this.tax=0;
     this.i=0;
     this.quantity=[];
    this.productDetails=[];
    this.Image=[];
   }


   placeorder(){
     this.userService.carthistory(this.productDetails,this.Image,this.quantity);
     alert("Order Placed Successfully!!");
    //  this.userService.addcart("","","");
     this.total=0.0;
      this.subtotal=0;
      this.tax=0;
      this.i=0;
      this.quantity=[];
      this.productDetails=[];
      this.Image=[];
      this.userService.clearcart();
   }

   



  ngOnInit() {}


}


