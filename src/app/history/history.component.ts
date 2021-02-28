import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  public productDetails=new Array();
  public Image=new Array;
  public quantity=new Array();
  constructor(public userService:UserService) {
    this.productDetails=[];
    this.Image=[];
    this.quantity=[];
    this.productDetails=this.userService.carthistorydetails();
    this.Image=this.userService.carthistoryImages();
    this.quantity=this.userService.historyquantity();
    // console.log(this.productDetails);
    // console.log(this.Image);
    // console.log(this.quantity);
   }

  ngOnInit() {}

}
