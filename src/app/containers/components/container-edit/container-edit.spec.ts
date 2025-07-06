import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEdit } from './container-edit';

describe('ContainerEdit', () => {
  let component: ContainerEdit;
  let fixture: ComponentFixture<ContainerEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
