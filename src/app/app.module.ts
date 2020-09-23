import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Baimau1Component } from './baimau1/baimau1.component';
import { FormsModule } from '@angular/forms';
import { Baimau2Component } from './baimau2/baimau2.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { Baimau3Component } from './baimau3/baimau3.component';
import { Baitl1Component } from './baitl1/baitl1.component';
import { Baitl2Component } from './baitl2/baitl2.component';
import { Baitl3Component } from './baitl3/baitl3.component';
import { Baitl4Component } from './baitl4/baitl4.component';
import { Baitl5Component } from './baitl5/baitl5.component';
import { Baitl6Component } from './baitl6/baitl6.component';
import { Baitl7Component } from './baitl7/baitl7.component';
import { Baitl8Component } from './baitl8/baitl8.component';

const routes: Routes=[
  {
    path: 'baimau1',
    component: Baimau1Component,
  },
  {
    path: 'baimau2',
    component: Baimau2Component,
  },
  {
    path: 'baimau3',
    component: Baimau3Component,
  },
  {
    path: 'baitl1',
    component: Baitl1Component,
  },
  {
    path: 'baitl2',
    component: Baitl2Component,
  },
  {
    path: 'baitl3',
    component: Baitl3Component,
  },
  {
    path: 'baitl4',
    component: Baitl4Component,
  },
  {
    path: 'baitl5',
    component: Baitl5Component,
  },
  {
    path: 'baitl6',
    component: Baitl6Component,
  },
  {
    path: 'baitl7',
    component: Baitl7Component,
  },
  {
    path: 'baitl8',
    component: Baitl8Component,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Baimau1Component,
    Baimau2Component,
    Baimau3Component,
    Baitl1Component,
    Baitl2Component,
    Baitl3Component,
    Baitl4Component,
    Baitl5Component,
    Baitl6Component,
    Baitl7Component,
    Baitl8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
