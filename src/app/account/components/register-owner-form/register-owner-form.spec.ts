import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOwnerForm } from './register-owner-form';

describe('RegisterOwnerForm', () => {
  let component: RegisterOwnerForm;
  let fixture: ComponentFixture<RegisterOwnerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOwnerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOwnerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
