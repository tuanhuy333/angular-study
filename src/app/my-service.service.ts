import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {


  showTodayDate() {
    let today = new Date();
    return today;
  }

  private finaldata = [];
  private apiurl = "http://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) { }
  getData() {
     return this.httpClient.get(this.apiurl);
  }
}
