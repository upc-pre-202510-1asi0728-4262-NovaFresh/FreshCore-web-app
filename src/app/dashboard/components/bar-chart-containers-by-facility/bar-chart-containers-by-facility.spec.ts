import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartContainersByFacility } from './bar-chart-containers-by-facility';

describe('BarChartContainersByFacility', () => {
  let component: BarChartContainersByFacility;
  let fixture: ComponentFixture<BarChartContainersByFacility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartContainersByFacility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartContainersByFacility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
