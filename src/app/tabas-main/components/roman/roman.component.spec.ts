/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RomanComponent } from './roman.component';

describe('RomanComponent', () => {
  let component: RomanComponent;
  let fixture: ComponentFixture<RomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
