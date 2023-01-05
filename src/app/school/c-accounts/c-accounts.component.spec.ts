import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAccountsComponent } from './c-accounts.component';

describe('CAccountsComponent', () => {
  let component: CAccountsComponent;
  let fixture: ComponentFixture<CAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
