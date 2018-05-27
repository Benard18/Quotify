import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
    @Output() isComplete= new EventEmitter<boolean>();

    quoteComplete(complete:boolean){
      this.isComplete.emit(complete);
    }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  likes(id) {
    this.likes[id].like();
  }

  dislikes(id) {
    this.dislikes[id].dislike();
  }
  constructor() { }

  ngOnInit() {
  }

}
