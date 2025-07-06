import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerItem } from './container-item';

describe('ContainerItem', () => {
  let component: ContainerItem;
  let fixture: ComponentFixture<ContainerItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
