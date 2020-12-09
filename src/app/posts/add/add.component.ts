import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private postService : PostService, private router : Router) { }

  add(f : NgForm){
    let post = this.postService.createPost(f.value.userId, f.value.id, f.value.title, f.value.body);
    this.postService.addPost(post);
    console.log(this.postService.getPosts());
    //naviguer vers la liste
    this.router.navigate(["/posts"]);
  }

  ngOnInit(): void {
  }

}
