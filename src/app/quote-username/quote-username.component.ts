import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-username',
  templateUrl: './quote-username.component.html',
  styleUrls: ['./quote-username.component.css']
})
export class QuoteUsernameComponent implements OnInit {

  @Input() quote: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
