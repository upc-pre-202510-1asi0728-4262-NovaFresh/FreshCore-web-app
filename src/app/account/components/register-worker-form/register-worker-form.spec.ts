import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWorkerForm } from './register-worker-form';

describe('RegisterWorkerForm', () => {
  let component: RegisterWorkerForm;
  let fixture: ComponentFixture<RegisterWorkerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterWorkerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterWorkerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
