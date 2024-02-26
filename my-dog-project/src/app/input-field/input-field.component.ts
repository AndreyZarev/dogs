import { Component } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  handleSubmit(username: string) {
    console.log(username);

  }
  //  ngOnInit() {

  //  }
}
