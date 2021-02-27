import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers:[UserService]
})
export class SignupComponent implements OnInit {
  name="";
  email="";
  password="";
  number:any="";
  success:any;
  register={};
  // username=new Array();
  
  constructor(private http:HttpClient, public router:Router, public userService:UserService) { 
  

  }
  ngOnInit() {
  }

  RegisterUser(){

    this.register={
      'add':'true',
      obj:{
        'name':this.name,
        'email':this.email,
        'password':this.password,
        'number':this.number,
      }
      
    };


    this.http.post(environment.serverurl+"/api/user/",this.register).subscribe((res:any)=>{
       // console.log(this.register);
       console.log(res);

       this.success=res['request'];
       if(this.success=="New User Created")
       {
          //  this.username=[];
          //  this.username.push(res['username']);
           alert("New user created");
          //  this.userService.getprofile(this.username);
           this.router.navigate(['/login']);
       }
       else if(this.success=="User Email already exists")
       {
           alert(" Email already exists");
       }
    }
      
       
      
    );
    
  }

}
