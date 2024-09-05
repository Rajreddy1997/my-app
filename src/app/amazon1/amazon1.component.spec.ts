import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amazon1Component } from './amazon1.component';

describe('Amazon1Component', () => {
  let component: Amazon1Component;
  let fixture: ComponentFixture<Amazon1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Amazon1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Amazon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
