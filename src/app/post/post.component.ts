import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public postData:any;
  constructor(public apiService:ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getAllPosts();
  }

  post(){
    this.apiService.post({"message":this.postData});
  }

}
