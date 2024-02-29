import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  handleSubmit(username: string) {

    console.log(username);

  }
  ngOnInit() {
    console.log("init");

  }
}
