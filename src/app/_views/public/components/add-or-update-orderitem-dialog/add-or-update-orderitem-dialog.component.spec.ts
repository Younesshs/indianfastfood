import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateOrderitemDialogComponent } from './add-or-update-orderitem-dialog.component';

describe('AddOrUpdateOrderitemDialogComponent', () => {
  let component: AddOrUpdateOrderitemDialogComponent;
  let fixture: ComponentFixture<AddOrUpdateOrderitemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateOrderitemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrUpdateOrderitemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
