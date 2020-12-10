import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable()
export class PostService {
  posts = new Array<Post>();

  constructor(private http : HttpClient) {
    this.posts = [];
   }

  createPost(userId, id, title, body ){
    return new Post(userId, id, title, body);
  }

  /*addPost(post : Post){
    this.posts.push(post);
  }*/

  addPost(post : Post) : Observable<Object>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  /*
  getPosts(){
    return this.posts;
  }
  */

  getPosts(): Observable<Post[]>{
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  getPost(indice : number){
    return this.posts[indice];
  }

  deletePost(indice : number){
    this.posts.splice(indice, 1);
  }

  editPost(indice : number, post : Post){
    this.posts[indice]=post;
  }





}
