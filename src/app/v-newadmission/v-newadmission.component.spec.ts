import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VNewadmissionComponent } from './v-newadmission.component';

describe('VNewadmissionComponent', () => {
  let component: VNewadmissionComponent;
  let fixture: ComponentFixture<VNewadmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VNewadmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VNewadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
