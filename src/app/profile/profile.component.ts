import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public apiService:ApiService,private route:ActivatedRoute) {
    this.apiService.getProfile(this.route.snapshot.params['id'])

  }

  ngOnInit(): void {

  }

}
