import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { AccountViewComponent } from '../account-view/account-view.component';
=======

import { AccountViewComponent } from './account-view.component';
>>>>>>> master

describe('AccountViewComponent', () => {
  let component: AccountViewComponent;
  let fixture: ComponentFixture<AccountViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
