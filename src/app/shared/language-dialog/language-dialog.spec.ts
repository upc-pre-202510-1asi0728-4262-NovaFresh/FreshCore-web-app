import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDialog } from './language-dialog';

describe('LanguageDialog', () => {
  let component: LanguageDialog;
  let fixture: ComponentFixture<LanguageDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
