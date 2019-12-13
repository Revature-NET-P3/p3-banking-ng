/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegularAccountComponent } from './regular-account.component';

describe('RegularAccountComponent', () => {
  let component: RegularAccountComponent;
  let fixture: ComponentFixture<RegularAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
