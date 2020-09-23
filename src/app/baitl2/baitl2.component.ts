import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitl2',
  templateUrl: './baitl2.component.html',
  styleUrls: ['./baitl2.component.css']
})
export class Baitl2Component implements OnInit {

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
      this.ketqua +=(Math.pow(-1,i))*(Math.pow(this.x,i)/giaithua(i));
    }
  }
}
function giaithua(a:number) {
  let giai_thua = 1;
  for (let i = 1; i <= a; i++)
      giai_thua *= i;
  return giai_thua;
}
