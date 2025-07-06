import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarErrorWrongParameters } from './snackbar-error-wrong-parameters';

describe('SnackbarErrorWrongParameters', () => {
  let component: SnackbarErrorWrongParameters;
  let fixture: ComponentFixture<SnackbarErrorWrongParameters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackbarErrorWrongParameters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarErrorWrongParameters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
