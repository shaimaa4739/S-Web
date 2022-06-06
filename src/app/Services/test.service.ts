import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl='https://jsonplaceholder.typicode.com'
  dbTable="/users"
  constructor(public myClient:HttpClient) {

  }
  getUserById(userID:any)
  {
    return this.myClient.get(`${this.baseUrl}${this.dbTable}/${userID}`);
  }
  getUsers()
  {
    // establishing connection between the services and api with get method
    return this.myClient.get(`${this.baseUrl}${this.dbTable}`);
  }
  addUser(user:{name:string; age:number})
  {
    return this.myClient.post(`${this.baseUrl}${this.dbTable}`,user);
  }
  deleteUser(userID:any)
  {
    return this.myClient.delete(`${this.baseUrl}${this.dbTable}/${userID}`);
  }
  editUser(userID:any,user:{name:string; age:number})
  {
    return this.myClient.put(`${this.baseUrl}${this.dbTable}/${userID}`,user);
  }


}
