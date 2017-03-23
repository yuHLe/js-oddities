import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>String of Number</h1>
    1+"1"; //"11"
    1-"1"; //0
  `,
})
export class NumberStringOddityComponent  {}