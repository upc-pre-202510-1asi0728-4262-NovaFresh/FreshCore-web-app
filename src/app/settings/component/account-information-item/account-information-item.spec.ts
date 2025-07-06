import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInformationItem } from './account-information-item';

describe('AccountInformationItem', () => {
  let component: AccountInformationItem;
  let fixture: ComponentFixture<AccountInformationItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInformationItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountInformationItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
