import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController, Platform } from '@ionic/angular';
import { UserService } from '../user.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit{
  public imag="";
  public productdetails=new Array();
  public quantity=1;
  
  
  constructor(public userService: UserService,
    public router:Router,
    public platform:Platform,
    public navctrl:NavController,
    public modalctrl:ModalController,
    public loadingctrl:LoadingController
    ) {   

   }

   

  public cart(){
    this.userService.addcart(this.productdetails,this.imag,this.quantity);
    alert("Product Added to Cart!!");
  }
  ngOnInit() {
    
  }
  async ionViewDidEnter(){
    
    let loading = this.loadingctrl.create({

      message: '<img src="/assets/com-gif-maker-3--unscreen.gif">',
      // cssClass: 'custom-loading',
      // translucent: true,
      // showBackdrop: false,
      spinner: null,
      duration: 1000,
      // message: 'Please wait...',
      // spinner: 'bubbles',
      });
    await (await loading).present();
    // /assets/com-gif-maker-3--unscreen.gif
    // 

    this.productdetails=[];
    this.imag="";

    
    this.imag=this.userService.product();
    // console.log(this.imag);
    this.productdetails=(this.userService.getProductDetails(this.imag));
    // console.log(this.productdetails);
    // this.loadingctrl.dismiss();
  }
  

}
