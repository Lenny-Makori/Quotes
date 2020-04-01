import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteVotesComponent } from './quote-votes.component';

describe('QuoteVotesComponent', () => {
  let component: QuoteVotesComponent;
  let fixture: ComponentFixture<QuoteVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
