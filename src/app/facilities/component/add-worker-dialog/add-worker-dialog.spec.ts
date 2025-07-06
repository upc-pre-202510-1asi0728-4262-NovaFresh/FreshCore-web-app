import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkerDialog } from './add-worker-dialog';

describe('AddWorkerDialog', () => {
  let component: AddWorkerDialog;
  let fixture: ComponentFixture<AddWorkerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWorkerDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
