import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDetails } from './worker-details';

describe('WrokerDetailsComponent', () => {
  let component: WorkerDetails;
  let fixture: ComponentFixture<WorkerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
