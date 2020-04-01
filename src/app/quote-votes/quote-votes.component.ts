import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-votes',
  templateUrl: './quote-votes.component.html',
  styleUrls: ['./quote-votes.component.css']
})
export class QuoteVotesComponent implements OnInit {
  numberOfVotes: number = 0;

  upVote(){
    this.numberOfVotes++;
  }

  downVote(){
    this.numberOfVotes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
