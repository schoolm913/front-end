import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersAddEditPageComponent } from './teachers-add-edit-page.component';

describe('TeachersAddEditPageComponent', () => {
  let component: TeachersAddEditPageComponent;
  let fixture: ComponentFixture<TeachersAddEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachersAddEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachersAddEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
