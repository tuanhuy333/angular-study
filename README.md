# FOLLOW THIS:
https://viettuts.vn/angular7/data-binding-trong-angular7

# 1. Set up enviroment
  ## install angular/cli
  npm install -g @angular/cli

# 2. Create new app
  ng new "my-new-angular-app"
  ## start App
  ng serve 

# 3. Generate component
  ng g component my-new-component

# 4. If, For and DataBinding

<div *ngIf="showAge"> Age = 18 </div>

<div> Months : 
  <select> 
    <option *ngFor = "let i of months">{{i}}</option> 
  </select> 
</div> 

# 5. Event Binding

myClickFunction(event: any) {
    this.showAge = !this.showAge;
  }

# 6. Directive

ng g directive addText 
# 7. Pipe
Ex:
<h1>
    Welcome to {{ title | uppercase}}!
</h1>

Lowercase pipe
Uppercase pipe
Date pipe
Currency pipe
Json pipe
Percent pipe
Decimal pipe
Slice pipe

# 8. Routing
const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"contactus", component:ContactusComponent}
];

# 9. Service


