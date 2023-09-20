import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlayoutComponent } from './rlayout.component';

describe('RlayoutComponent', () => {
  let component: RlayoutComponent;
  let fixture: ComponentFixture<RlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
