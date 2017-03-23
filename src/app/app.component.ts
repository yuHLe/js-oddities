import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/oddities/array" routerLinkActive="active">Array</a>
      <a routerLink="/oddities/decimal" routerLinkActive="active">Decimal</a>
      <a routerLink="/oddities/infinity" routerLinkActive="active">Infinity</a>
      <a routerLink="/oddities/number-string-oddity" routerLinkActive="active">Number String</a>
    </nav>
    <router-outlet></router-outlet>
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