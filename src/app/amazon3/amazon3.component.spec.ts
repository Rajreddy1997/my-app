import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amazon3Component } from './amazon3.component';

describe('Amazon3Component', () => {
  let component: Amazon3Component;
  let fixture: ComponentFixture<Amazon3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Amazon3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Amazon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
