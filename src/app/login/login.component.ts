import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData:any={};
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.authService.loginUser(this.loginData);

  }

}
