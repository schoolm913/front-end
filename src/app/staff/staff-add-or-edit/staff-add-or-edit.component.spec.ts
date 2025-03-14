import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAddOrEditComponent } from './staff-add-or-edit.component';

describe('StaffAddOrEditComponent', () => {
  let component: StaffAddOrEditComponent;
  let fixture: ComponentFixture<StaffAddOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffAddOrEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
