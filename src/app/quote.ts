export class Quote {
   public showquote:boolean;
   like:Function;
   dislike:Function;
  constructor(public id:number,public name:string,public quote:string,public author:string,public completeDate:Date,public likes:number,public dislikes:number) {
this.showquote=false;

this.like=function() {
  this.likes++;
}
this.dislike=function() {
  this.dislikes++;
}

}
}
