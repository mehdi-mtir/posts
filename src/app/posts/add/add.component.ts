import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private postService : PostService) { }

  add(f : NgForm){
    let post = this.postService.createPost(f.value.userId, f.value.id, f.value.title, f.value.body);
    this.postService.addPost(post);
    console.log(this.postService.getPosts());
    //naviguer vers la liste
  }

  ngOnInit(): void {
  }

}
