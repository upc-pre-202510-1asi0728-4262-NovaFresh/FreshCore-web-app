import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChartStatusContainer } from './base-chart-status-container';

describe('BaseChartStatusContainer', () => {
  let component: BaseChartStatusContainer;
  let fixture: ComponentFixture<BaseChartStatusContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseChartStatusContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseChartStatusContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
