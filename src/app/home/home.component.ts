import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newcomponent = "New Component";
  todayDate1: Date | undefined;
  constructor(private myservice: MyServiceService) { }
  ngOnInit() {
     this.todayDate1 = this.myservice.showTodayDate();
  }

}
