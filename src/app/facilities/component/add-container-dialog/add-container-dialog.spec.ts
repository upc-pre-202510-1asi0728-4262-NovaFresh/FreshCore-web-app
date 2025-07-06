import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContainerDialog } from './add-container-dialog';

describe('AddContainerDialog', () => {
  let component: AddContainerDialog;
  let fixture: ComponentFixture<AddContainerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddContainerDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContainerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
