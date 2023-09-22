import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnavigationComponent } from './pnavigation.component';

describe('PublicNavigationComponent', () => {
  let component: PnavigationComponent;
  let fixture: ComponentFixture<PnavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
