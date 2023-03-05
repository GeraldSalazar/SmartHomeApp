import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LEDlightComponent } from './ledlight.component';

describe('LEDlightComponent', () => {
  let component: LEDlightComponent;
  let fixture: ComponentFixture<LEDlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LEDlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LEDlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
