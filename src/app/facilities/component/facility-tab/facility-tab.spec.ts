import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTab } from './facility-tab';

describe('FacilityTab', () => {
  let component: FacilityTab;
  let fixture: ComponentFixture<FacilityTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
