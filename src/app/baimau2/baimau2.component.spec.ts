import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baimau2Component } from './baimau2.component';

describe('Baimau2Component', () => {
  let component: Baimau2Component;
  let fixture: ComponentFixture<Baimau2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baimau2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baimau2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
