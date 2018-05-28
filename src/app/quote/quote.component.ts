import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'Ben','A touche is an asssault for days','merlin',new Date(),0,0),

  ]
  toogleDetails(index){
    this.quotes[index].showquote = !this.quotes[index].showquote;
  }

  quoteDelete(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }


  likes(id) {
    this.quotes[id].like();
  }

  dislikes(id) {
    this.quotes[id].dislike();
  }
  addNewQuote(quote){
         let quotesLength = this.quotes.length;
         quote.id=quotesLength+1;
         quote.completeDate = new Date(quote.completeDate)
         this.quotes.push(quote)

     }

  constructor() { }

  ngOnInit() {
  }


}
