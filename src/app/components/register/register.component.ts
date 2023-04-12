import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import db from '../../../server/db.json';
import { User } from 'src/assets/User';
// import http from HttpClient;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private router:Router){}
  register:any=FormGroup
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
  goToLogin(): void{
    console.log(`click on login button`);
    
    this.router.navigate(['login'])

  }

  registerToDb(event:any){
    let flag:boolean=true
    if(this.name && this.email){
    event.preventDefault()
    const data:User={
      "name":this.name,
      "email":this.email,
      "id":Math.floor(Math.random()*100)
    }
    let users:User[]
     users=JSON.parse(localStorage.getItem("users"))
    if(users==null){
      localStorage.setItem("users",JSON.stringify(db.user))
      users=JSON.parse(localStorage.getItem("users"))
      
    }
    const status=users.every(e=>{
        if(e.name==this.name && e.email==this.email){
          
          return false;
        }
        return true;
    })
    if(status){
      users.unshift(data)
      localStorage.setItem("users",JSON.stringify(users))
      this.goToLogin()
    }else{
      alert("user already exists")
    }
  }
}
}
