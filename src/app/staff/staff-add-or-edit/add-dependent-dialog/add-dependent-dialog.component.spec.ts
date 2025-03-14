import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependentDialogComponent } from './add-dependent-dialog.component';

describe('AddDependentDialogComponent', () => {
  let component: AddDependentDialogComponent;
  let fixture: ComponentFixture<AddDependentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDependentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDependentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
