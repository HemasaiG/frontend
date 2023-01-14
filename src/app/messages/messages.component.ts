import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public apiService:ApiService,private route:ActivatedRoute) { }

  ngOnInit():void {

      this.apiService.getMessages(this.route.snapshot.params['id']);
  }

}
