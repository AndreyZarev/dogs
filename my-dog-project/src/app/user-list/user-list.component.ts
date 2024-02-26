import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
type User = {
  name: string,
  age: number,
  color: string
}
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  ngOnInit() {
    console.log("component has been created");

  }

  ngAfterViewInit() {
    console.log("afterViewInit");
  }

  users = [
    { name: "Dimitar", age: 28, color: "black" },
    { name: "Osman", age: 22, color: "green" },

    { name: "Carolina", age: 32, color: "yellow" },
    { name: "Sisi", age: 29, color: "blue" },
    { name: "Pesho", age: 36, color: "red" },

  ] as User[]


}
