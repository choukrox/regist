import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginsuccess2Component } from './loginsuccess2.component';

describe('Loginsuccess2Component', () => {
  let component: Loginsuccess2Component;
  let fixture: ComponentFixture<Loginsuccess2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loginsuccess2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Loginsuccess2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
