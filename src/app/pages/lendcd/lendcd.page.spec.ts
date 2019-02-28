import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendcdPage } from './lendcd.page';

describe('LendcdPage', () => {
  let component: LendcdPage;
  let fixture: ComponentFixture<LendcdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendcdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendcdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
