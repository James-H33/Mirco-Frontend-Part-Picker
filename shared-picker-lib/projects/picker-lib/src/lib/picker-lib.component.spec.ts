import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickerLibComponent } from './picker-lib.component';

describe('PickerLibComponent', () => {
  let component: PickerLibComponent;
  let fixture: ComponentFixture<PickerLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickerLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
