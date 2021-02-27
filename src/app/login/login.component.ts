import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules, analyzeFileForInjectables } from '@angular/compiler';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email="";
  password="";

  success:any;
  userlogin={};
  username=new Array();

  constructor(private http:HttpClient, public router:Router, public userService:UserService) {

   }

  ngOnInit() {}

  login(){

    this.userlogin={
      // 'add':'true',
      obj:{
        'email':this.email,
        'password':this.password,
        'cartdetails':[],
        'cartimages':[],
        'historydetails':[],
        'historyimages':[]
      }
      
    };

    this.http.put(environment.serverurl+"/api/userlogin/",this.userlogin).subscribe((res:any)=>{
      this.success=res['request'];
      if(this.success=="1")
        {
            this.username=[];
            this.username.push(res['username']);
            alert("Successfully Logged In");
            this.userService.getprofile(this.username);
            this.router.navigate(['/site']);
        }
        else if(this.success=="0")
        {
            alert("Invalid Credentials! Please try again");
        }
      console.log(this.username);
    }
    );
  }


}



// data =>{
      //   // console.log(this.userlogin);
      //   console.log(data);

      //   this.success=data['request'];
      //   this.username=data['username']
      //   if(this.success=="1")
      //   {
      //       alert("Successfully Logged In");

      //       this.router.navigate(['/site']);
      //   }
      //   else if(this.success=="0")
      //   {
      //       alert("Invalid Credentials! Please try again");
      //   }


      // }