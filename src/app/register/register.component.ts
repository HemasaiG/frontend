import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData:any={};
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  registerUser(data: any){
    this.registerData=data;
    console.log("r",this.registerData)
    this.authService.registerUser(this.registerData);

  }

}
