import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoveryAccountPage } from './resovery-account.page';

describe('ResoveryAccountPage', () => {
  let component: ResoveryAccountPage;
  let fixture: ComponentFixture<ResoveryAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResoveryAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResoveryAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
