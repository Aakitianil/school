import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAccountsComponent } from './v-accounts.component';

describe('VAccountsComponent', () => {
  let component: VAccountsComponent;
  let fixture: ComponentFixture<VAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
