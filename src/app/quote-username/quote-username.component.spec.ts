import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteUsernameComponent } from './quote-username.component';

describe('QuoteUsernameComponent', () => {
  let component: QuoteUsernameComponent;
  let fixture: ComponentFixture<QuoteUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
