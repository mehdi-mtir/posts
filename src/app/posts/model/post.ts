export class Post {
  private userId : number;
  private id : number;
  private title : string;
  private body : string;

  constructor(userId : number, id : number, title : string, body : string){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
