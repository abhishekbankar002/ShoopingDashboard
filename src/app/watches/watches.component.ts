import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.scss'],
})
export class WatchesComponent implements OnInit {

  
  public section='Watches';
  public productList=new Array();
  public productname=[];
  public productprice=[];
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
    this.userService.card(product);
  }

  ngOnInit() {}

}
