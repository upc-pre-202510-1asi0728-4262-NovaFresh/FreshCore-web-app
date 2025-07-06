import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityItems } from './facility-items';

describe('FacilityItems', () => {
  let component: FacilityItems;
  let fixture: ComponentFixture<FacilityItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
