import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteUsernameComponent } from './quote-username/quote-username.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteVotesComponent } from './quote-votes/quote-votes.component';
import { HighlightDirective } from './highlight.directive';
// import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuoteUsernameComponent,
    QuoteFormComponent,
    QuoteVotesComponent,
    HighlightDirective,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
