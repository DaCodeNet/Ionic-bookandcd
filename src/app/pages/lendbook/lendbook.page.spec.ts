import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendbookPage } from './lendbook.page';

describe('LendbookPage', () => {
  let component: LendbookPage;
  let fixture: ComponentFixture<LendbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
