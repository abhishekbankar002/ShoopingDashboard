import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {

  public section='home';
  public productList=new Array();
  public productname=[];
  public productprice=[];
  constructor(public userService: UserService) { 
  
    this.productList=[];
    this.productname=[];
    this.productprice=[];

      this.userService.getApi(this.section).subscribe((res:any)=>{
        // console.log(res);
          this.productList.push((res['response']));
          this.productname.push((res['detailname']));
          this.productprice.push((res['detailprice']));
          // this.productDetail.push(res['details']);
      } 
      );
      // console.log(this.productList);
      // console.log(this.productname);
      // console.log(this.productprice);
  }
  public card(product){
    // this.imgurl=product;
    this.userService.card(product);
  }
  ngOnInit() {}

}
