import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-angular-app';


  // write logic here !

  // khai bao mang cac thang.
  months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];

  showAge = false;

  myClickFunction(event: any) {
    // hiển thị thông báo
    alert("Button is clicked!");
    // hiện thị log ra console
    console.log(event);
  }

  changeMonth(event1:any){
    alert('Change dropdown.'+ event1);
  }
}
