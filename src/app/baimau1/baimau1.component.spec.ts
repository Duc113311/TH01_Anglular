import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baimau1Component } from './baimau1.component';

describe('Baimau1Component', () => {
  let component: Baimau1Component;
  let fixture: ComponentFixture<Baimau1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baimau1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baimau1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
