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

