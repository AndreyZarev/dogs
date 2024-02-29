import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaygroundComponent } from './playground/playground.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { TestingFileComponent } from './testing-file/testing-file.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserListComponent,
    PlaygroundComponent,
    InputFieldComponent,
    TestingFileComponent
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


