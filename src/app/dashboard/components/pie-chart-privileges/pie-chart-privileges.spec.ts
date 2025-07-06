import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartPrivileges } from './pie-chart-privileges';

describe('PieChartPrivileges', () => {
  let component: PieChartPrivileges;
  let fixture: ComponentFixture<PieChartPrivileges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartPrivileges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartPrivileges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
