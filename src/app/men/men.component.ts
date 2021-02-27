import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss'],
})
export class MenComponent implements OnInit {
  // public imgurl='';
  public section='men';
  public productList=new Array();
  public productname=[];
  public productprice=[];
  constructor(public userService: UserService,private router:Router) { 
  
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
    this.router.navigate(['/product']);
  }

  ngOnInit() {}

  
}
