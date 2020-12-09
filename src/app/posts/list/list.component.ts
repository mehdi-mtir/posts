import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts : Post[];

  constructor(private postService : PostService, private router : Router) { }

  goToAdd(){
    this.router.navigate(["/posts", "add"]);
  }

  delete(indice : number){
    this.postService.deletePost(indice);
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

}
