import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutComponent } from './page/about.component';
import { HomeComponent } from './page/home.component';
import { ArrayOddityComponent } from './page/oddities/array-oddity.component';
import { DecimalOddityComponent } from './page/oddities/decimal-oddity.component';
import { InfinityOddityComponent } from './page/oddities/infinity-oddity.component';
import { NumberStringOddityComponent } from './page/oddities/number-string-oddity.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'array-oddity', component: ArrayOddityComponent },
  { path: 'decimal-oddity', component: DecimalOddityComponent },
  { path: 'infinity-oddity', component: InfinityOddityComponent },
  { path: 'number-string-oddity', component: NumberStringOddityComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ArrayOddityComponent,
    DecimalOddityComponent,
    InfinityOddityComponent,
    NumberStringOddityComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
