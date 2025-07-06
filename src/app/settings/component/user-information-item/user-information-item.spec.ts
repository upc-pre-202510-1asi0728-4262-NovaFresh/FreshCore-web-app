import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationItem } from './user-information-item';

describe('UserInformationItem', () => {
  let component: UserInformationItem;
  let fixture: ComponentFixture<UserInformationItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInformationItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
