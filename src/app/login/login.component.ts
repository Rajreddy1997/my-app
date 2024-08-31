import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup= new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  })

  constructor(private _loginService:LoginService,private router:Router){}

  login(){
    console.log(this.loginForm);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login success");
        sessionStorage.setItem("token",data.token);
        // sessionStorage.setItem('token',data.token)
        this.router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("invalid credentials.");
      }
    )
  }
}
  

    
