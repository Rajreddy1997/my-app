import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amazon4Component } from './amazon4.component';

describe('Amazon4Component', () => {
  let component: Amazon4Component;
  let fixture: ComponentFixture<Amazon4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Amazon4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Amazon4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
