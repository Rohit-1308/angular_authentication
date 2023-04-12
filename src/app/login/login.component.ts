import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/assets/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router){

  }
  name:any
  email:any
  getName(event:any){
    this.name=event.target.value;
    // console.log(this.name);
    
  }
  getEmail(event:any){
    this.email=event.target.value;
    // console.log(this.email);
  }
  ngOnInit():void{
      
  }

  goToRegister(){
      this.router.navigate(['register'])
  }
  login(){
    let users:User[]
    let flag:boolean=false
     users=JSON.parse(localStorage.getItem("users"))
    users.forEach(element => {
      if(element.name==this.name && element.email==this.email){
        const data:User=element;
        console.log(data);
        
        localStorage.setItem("info",JSON.stringify(data))
      console.log(`logged in`);
      flag=true
      this.router.navigate(['profile'])
      }
    });
    if(!flag){
      alert("user does not exist")
    }
  }
}
