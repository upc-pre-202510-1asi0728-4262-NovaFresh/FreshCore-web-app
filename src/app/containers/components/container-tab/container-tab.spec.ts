import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTab } from './container-tab';

describe('ContainerTab', () => {
  let component: ContainerTab;
  let fixture: ComponentFixture<ContainerTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
