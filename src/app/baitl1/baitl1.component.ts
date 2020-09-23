import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitl1',
  templateUrl: './baitl1.component.html',
  styleUrls: ['./baitl1.component.css']
})
export class Baitl1Component implements OnInit {

  constructor() { }
  n:any;
  x:any;
 ketqua=0;
  ngOnInit(): void {
  }
  tinh()
  {
    for(let i=1;i<=this.n;++i)
    {
      this.ketqua += Math.pow(this.x,i);// tính kq số mũ: n là mũ,x số
    }
  }

}
