import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTeacherComponent } from './v-teacher.component';

describe('VTeacherComponent', () => {
  let component: VTeacherComponent;
  let fixture: ComponentFixture<VTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
