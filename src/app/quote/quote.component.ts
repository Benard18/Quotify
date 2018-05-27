import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(),0,0),

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
    this.likes[id].like();
  }

  dislikes(id) {
    this.dislikes[id].dislike();
  }
  addNewQuote(quote){
         let quotesLength = this.quotes.length;
         this.quotes.id=quotesLength+1;
         this.quotes.completeDate = new Date(quote.completeDate)
         this.quotes.push(quote)

     }

  constructor() { }

  ngOnInit() {
  }


}
