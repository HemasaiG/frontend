import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public messages:any;
  public feedposts:any;
  public users:any;
  public profile:any;
  public path= environment.path;
  constructor(private http:HttpClient) {}

  getToken(){
    return localStorage.getItem('token');
  }

  getUsers(){
    this.http.get(this.path+"/users").subscribe(
     (response)=> this.users=response,
     (error)=> console.log(error),
     ()=> console.log("Completed retriving Users",this.users)
   );
 }

 getProfile(id:any){
  this.http.get(this.path+"/profile/"+id).subscribe(data=>{
    this.profile=data
    console.log("Profile",this.profile)
  })
}
getMessages(userId:any){
  this.http.get(this.path+"/post/"+userId).subscribe(
   (response)=> this.messages=response,
   (error)=> console.log(error),
   ()=> console.log("Completed retriving Posts",this.messages)
 );
}

post(postData:any){
  this.http.post(this.path+'/post',postData).subscribe(
    (res: any)=>{console.log("Sent Successfully",res)}
  )
}

getAllPosts(){
  this.http.get(this.path+'/feed').subscribe(
    (res:any)=>{
      console.log(res);
      this.feedposts=res;
    }
  )
}


}
