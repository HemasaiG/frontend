import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path=environment.path+ "/auth";
  constructor(private http:HttpClient,private route:Router) { }

  getToken(){
    return localStorage.getItem('token');
  }

  isAuthenticated(){
    return !!localStorage.getItem('token');
  }

  logout(){
      localStorage.removeItem('token');
      this.route.navigate(['/'])
  }

  registerUser(registerData:any){
    this.http.post(this.path+'/register',registerData).subscribe(
      (res: any)=>{console.log("Sent Successfully",res)}
    )
  }

  loginUser(loginData:any){
    this.http.post(this.path + '/login',loginData).subscribe(
      (res: any)=>{
        console.log(res)
        localStorage.setItem('token',res.token);
        if(this.isAuthenticated()){
        this.route.navigate(['/feed']);
        }
      }
    )
  }
}
