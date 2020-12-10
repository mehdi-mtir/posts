import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable()
export class PostService {
  posts : Post[];

  createPost(userId, id, title, body ){
    return new Post(userId, id, title, body);
  }

  addPost(post : Post){
    this.posts.push(post);
  }

  getPosts(){
    return this.posts;
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

  constructor() {
    this.posts = [];
   }



}
