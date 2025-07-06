import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConfirm } from './template-confirm';

describe('TemplateConfirm', () => {
  let component: TemplateConfirm;
  let fixture: ComponentFixture<TemplateConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateConfirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
