import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <p>JavaScript is a wonderful language.  It's extremely flexible and forgiving.  This flexibility, however, could potentially lead to bad coding habbits for beginners.  At the very least, it does provide some head scratching moments.</p>

    <p>Take into consideration some of the following examples:</p>
    <p>MAX_NUMBER = {{MAX_NUMBER}}</p>
    <p>MAX_NUMBER comes from Number.MAX_VALUE, a property in JS that represent the largest value possible in the language.  Any number larger than this would be represented by Infinity.  We can clearly see this plays out:</p>
    <p>MAX_NUMBER * 2 = {{doubleMax}}</p>
    <p>Lets just try something else.  Let us try adding 1 to MAX_NUMBER instead:</p>
    <p>MAX_NUMBER + 1 = {{addOne}}</p>
    <p>We're expecting Inifinity, but we got the same value as before.  Surely it's not actually the same value, right?  It's slightly larger but we can't see due to the cut off in the notation, surely.</p>
    <p>MAX_NUMBER === (MAX_NUMBER + 1); //{{MAX_NUMBER === addOne}}</p>
    <p>Well this is awkward.</p>
  `,
})
export class AppComponent  {
  title = `JS-Oddities`;
  MAX_NUMBER = Number.MAX_VALUE;
  doubleMax = 0;
  addOne = 0;
  constructor() {
    this.doubleMax = this.MAX_NUMBER * 2;
    this.addOne = this.MAX_NUMBER + 1;
  }
}