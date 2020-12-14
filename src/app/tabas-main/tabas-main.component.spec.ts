/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabasMainComponent } from './tabas-main.component';

describe('TabasMainComponent', () => {
  let component: TabasMainComponent;
  let fixture: ComponentFixture<TabasMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabasMainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
