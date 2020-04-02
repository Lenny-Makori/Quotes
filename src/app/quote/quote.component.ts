import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Mannasseh', 'Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.', 'Bill Gates', new Date(2019, 11, 2)),
    new Quote('Kelvin', 'You affect the world by what you browse.', 'Tim Berners-Lee', new Date(2019, 0, 23)),
    new Quote('Lenny', 'Success in creating AI would be the biggest event in human history. Unfortunately, it might also be the last, unless we learn how to avoid the risks.', 'Stephen Hawking', new Date(2019, 0, 24))
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
