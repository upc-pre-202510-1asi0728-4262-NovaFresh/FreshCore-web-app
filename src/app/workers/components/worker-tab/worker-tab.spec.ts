import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTab } from './worker-tab';

describe('WorkerTab', () => {
  let component: WorkerTab;
  let fixture: ComponentFixture<WorkerTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
