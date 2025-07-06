import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTimefilter } from './notification-timefilter';

describe('NotificationTimefilter', () => {
  let component: NotificationTimefilter;
  let fixture: ComponentFixture<NotificationTimefilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationTimefilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationTimefilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
