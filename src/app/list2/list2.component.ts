import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/model/post';
import { PostService } from '../posts/services/post.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
  posts : Post[];

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      posts =>{
        this.posts = posts;
      }
    )
  }

}
