import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baimau1',
  templateUrl: './baimau1.component.html',
  styleUrls: ['./baimau1.component.css']
})
export class Baimau1Component implements OnInit {

  constructor() { }
  public tong=0;
  n:any;
  ngOnInit(): void {
  }
   tinh() {
    for(let i=1;i<=this.n;++i)
    {
      this.tong += 1.0/i;
    }
   }
  }

