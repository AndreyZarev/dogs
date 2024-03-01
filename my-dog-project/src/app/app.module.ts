import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
class Person {
  public balance = 0;
  private name = "Solomon"

}

const p = new Person();
//Only the public properties are accessible
console.log(p.balance);


