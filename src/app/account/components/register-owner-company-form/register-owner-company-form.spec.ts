import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOwnerCompanyForm } from './register-owner-company-form';

describe('RegisterOwnerCompanyForm', () => {
  let component: RegisterOwnerCompanyForm;
  let fixture: ComponentFixture<RegisterOwnerCompanyForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOwnerCompanyForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOwnerCompanyForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
