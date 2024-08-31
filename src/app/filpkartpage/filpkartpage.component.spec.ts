import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilpkartpageComponent } from './filpkartpage.component';

describe('FilpkartpageComponent', () => {
  let component: FilpkartpageComponent;
  let fixture: ComponentFixture<FilpkartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilpkartpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilpkartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
