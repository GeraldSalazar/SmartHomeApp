import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedsContainerComponent } from './leds-container.component';

describe('LedsContainerComponent', () => {
  let component: LedsContainerComponent;
  let fixture: ComponentFixture<LedsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
