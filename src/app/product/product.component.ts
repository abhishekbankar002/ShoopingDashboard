import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit,AfterViewInit {
  public imag="";
  public productdetails=new Array();
  public quantity=1;
  
  constructor(public userService: UserService) {
    
   }

   
  public cart(){
    this.userService.addcart(this.productdetails,this.imag,this.quantity);
    alert("Product Added to Cart!!");
  }
  ngOnInit() {
    
  }
  ionViewDidEnter(){
    this.productdetails=[];
    this.imag="";
    this.imag=this.userService.product();
    console.log(this.imag);
    this.productdetails=(this.userService.getProductDetails(this.imag));
    console.log(this.productdetails);
  }
  ngAfterViewInit(){
    
  }

}
