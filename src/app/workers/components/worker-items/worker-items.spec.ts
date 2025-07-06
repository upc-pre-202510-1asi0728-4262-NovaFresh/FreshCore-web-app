import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerItems } from './worker-items';

describe('WorkerItems', () => {
  let component: WorkerItems;
  let fixture: ComponentFixture<WorkerItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
