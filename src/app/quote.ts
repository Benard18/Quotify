export class Quote {
   public showquote:boolean;
  constructor(public id:number,public name:string,public quote:string,public completeDate:Date,public likes:number,public dislikes:number) {
this.showquote=false;

}
like() {
  this.likes++;
}
dislike() {
  this.dislikes++;
}
}
