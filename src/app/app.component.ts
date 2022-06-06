import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentData:string="data from parent";
  recieveLogin:string="";
  reciveDataFromChild(data:string){
    this.recieveLogin=data;
  }
  title ='test-app';
}
