import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Decimal</h1>
    const a = 1;
    const b = 0; 
    const c = 0.0000000000000001;
    a + c === a; //true
    a + c === a + b; //true
    c === b; //true

    If a + c = a + b, we learn in math that we can subtract a from both side, which makes c = b, but that's not the case is it?  Why then did JS truncate our values?
  `,
})
export class DecimalOddityComponent {}