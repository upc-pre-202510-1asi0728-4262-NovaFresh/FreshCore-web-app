import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFilter } from './notification-filter';

describe('NotificationFilter', () => {
  let component: NotificationFilter;
  let fixture: ComponentFixture<NotificationFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
