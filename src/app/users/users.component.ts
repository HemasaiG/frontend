import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:any;
  constructor(public apiService:ApiService) {
    this.apiService.getUsers();
   }

  ngOnInit(): void {
  }

}
