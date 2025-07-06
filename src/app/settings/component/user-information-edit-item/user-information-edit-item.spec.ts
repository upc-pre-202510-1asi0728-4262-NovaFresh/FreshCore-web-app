import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationEditItem } from './user-information-edit-item';

describe('UserInformationEditItem', () => {
  let component: UserInformationEditItem;
  let fixture: ComponentFixture<UserInformationEditItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInformationEditItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInformationEditItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
