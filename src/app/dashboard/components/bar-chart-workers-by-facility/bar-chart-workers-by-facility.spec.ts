import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartWorkersByFacility } from './bar-chart-workers-by-facility';

describe('BarChartWorkersByFacility', () => {
  let component: BarChartWorkersByFacility;
  let fixture: ComponentFixture<BarChartWorkersByFacility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartWorkersByFacility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartWorkersByFacility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
