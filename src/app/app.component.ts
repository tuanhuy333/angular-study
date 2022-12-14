import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

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
    this.showAge = !this.showAge;
  }

  changeMonth(event1:any){
    alert('Change dropdown.'+ event1);
  }

  todayDate = new Date();
  jsonData = {name:'Vinh', age:'18', address:{huyen:'Me Linh', tp:'Ha Noi'}};



  todayDate1: Date | undefined;
  public persondata = [];
  constructor(private myservice: MyServiceService) {}
  ngOnInit() {
     this.todayDate1 = this.myservice.showTodayDate();

     this.myservice.getData().subscribe((data : any) => {
      Object.keys(data).forEach(key => {

        console.log(key, data[key]);
        //  this.persondata.push(data[key]);
      });
      console.log(this.persondata);
   });
  }

}
