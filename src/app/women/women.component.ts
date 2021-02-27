import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss'],
})
export class WomenComponent implements OnInit {

  public section='Womens';
  public productList=new Array();
  public productname=[];
  public productprice=[];
  // public imgurl="";
  constructor(public userService: UserService) { 
  
    this.productList=[];
    this.productname=[];
    this.productprice=[];

      this.userService.getApi(this.section).subscribe((res:any)=>{
        console.log(res);
          this.productList.push((res['response']));
          this.productname.push((res['detailname']));
          this.productprice.push((res['detailprice']));
          // this.productDetail.push(res['details']);
      } 
      );
      console.log(this.productList);
      console.log(this.productname);
      console.log(this.productprice);
  }
  public card(product){
    // this.imgurl=product;
    console.log(product);
    this.userService.card(product);
  }

  ngOnInit() {}

}
