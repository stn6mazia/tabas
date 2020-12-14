/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumNameComponent } from './num-name.component';

describe('NumNameComponent', () => {
  let component: NumNameComponent;
  let fixture: ComponentFixture<NumNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
