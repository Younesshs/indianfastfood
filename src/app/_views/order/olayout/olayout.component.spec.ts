import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlayoutComponent } from './olayout.component';

describe('OlayoutComponent', () => {
  let component: OlayoutComponent;
  let fixture: ComponentFixture<OlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
