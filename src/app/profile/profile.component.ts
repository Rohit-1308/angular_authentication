import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/assets/User';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router:Router){

  }
  ngOnInit():void{
      this.getUserInfo()
  }
  getUserInfo(){
    const div=document.getElementById('infodiv')
    const data:User=JSON.parse(localStorage.getItem("info"))
    div.innerHTML=`
    <table class="table table-stripped table-borderd">
    <tr>
      <td>Name</td>
      <td>${data.name}</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>${data.email}</td>
    </tr>
    <tr>
      <td>Id</td>
      <td>${data.id}</td>
    </tr>
  </table>`
  }

  logout(){
    this.router.navigate(["login"])
  }
}
