import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usrID:string="";
  constructor(public myActivated:ActivatedRoute,public myServices:TestService) {
    this.usrID = myActivated.snapshot.params['id']
  }

  user:any;
  ngOnInit(): void {
    this.myServices.getUserById(this.usrID).subscribe(
      (response)=>{
        this.user=response;
        console.log(this.user)
      }
    )
  }

}
