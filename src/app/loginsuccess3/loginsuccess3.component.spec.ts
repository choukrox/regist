import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginsuccess3Component } from './loginsuccess3.component';

describe('Loginsuccess3Component', () => {
  let component: Loginsuccess3Component;
  let fixture: ComponentFixture<Loginsuccess3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loginsuccess3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Loginsuccess3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
