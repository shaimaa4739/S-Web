import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public myService:TestService) { }

  users:any;
  ngOnInit(): void {
    this.myService.getUsers().subscribe(
      (response)=>{
        this.users=response;
      },
      ()=>{}
    );
  }

}
