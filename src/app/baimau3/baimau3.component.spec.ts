import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baimau3Component } from './baimau3.component';

describe('Baimau3Component', () => {
  let component: Baimau3Component;
  let fixture: ComponentFixture<Baimau3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baimau3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baimau3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
