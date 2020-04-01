import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('moh', 'mi ndo ule mse', 'jaymo'),
    new Quote('maish', 'ni birthday yangu mtajua hamjui', 'voke'),
    new Quote('mots', 'brobadeng', 'jeremy')
  ]

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    this.quotes.unshift(quote);  

  }

  constructor() { }

  ngOnInit(): void {
  }

}
