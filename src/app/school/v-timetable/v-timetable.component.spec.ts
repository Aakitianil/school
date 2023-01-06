import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTimetableComponent } from './v-timetable.component';

describe('VTimetableComponent', () => {
  let component: VTimetableComponent;
  let fixture: ComponentFixture<VTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
