import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public name=new Array();
  public email=new Array();
  public number=new Array();
  public image=new Array();
  public quantity=new Array();
  public productdeatils=new Array();
  public request:any={};
  constructor(public userService:UserService,private Http:HttpClient,public router:Router) {
    this.email=[];
    this.name=[];
    this.number=[];
  
    this.email.push(this.userService.profiledetails());
    // console.log(this.email);
    this.request={obj:this.email};
    // console.log(this.request);
    this.Http.put(environment.serverurl+"/api/profile/",this.request).subscribe((res:any)=>{
      this.name.push(res['name']);
      this.number.push(res['number']);
    }
    );
    // console.log(this.name,this.number);

   }

   orderhistory(){
    // console.log(this.email);
    this.request={obj:this.email};
    this.Http.post(environment.serverurl+'/api/orderhistory/',this.request).subscribe((res:any)=>
    {
      // console.log(res);
      this.image.push(res['image']);
      this.productdeatils.push(res['productdetails']);
      this.quantity.push(res['quantity']);
    }
    );
    this.userService.displaycarthistory(this.productdeatils,this.image,this.quantity);
    this.router.navigate(['/history']);
   }

   logout(){
     this.email=[];
     this.number=[];
     this.name=[];
     this.image=[];
     this.quantity=[];
     this.productdeatils=[];
     this.userService.getprofile("");
    //  alert("Successfully Logged Out");
     this.router.navigate(['/login']);
   }

  ngOnInit() {}

}
