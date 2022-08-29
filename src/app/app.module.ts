import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { AddTextDirective } from './add-text.directive';
import { SqrtPipe } from './app.sqrt';
@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    AddTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
