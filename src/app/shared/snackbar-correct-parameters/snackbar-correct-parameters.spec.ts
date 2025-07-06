import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarCorrectParameters } from './snackbar-correct-parameters';

describe('SnackbarCorrectParameters', () => {
  let component: SnackbarCorrectParameters;
  let fixture: ComponentFixture<SnackbarCorrectParameters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarCorrectParameters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarCorrectParameters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
