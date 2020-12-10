import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post : Post;
  indice : number;
  postEditForm : FormGroup;

  constructor(
    private activateRoute : ActivatedRoute,
    private postService : PostService,
    private router : Router) { }

  initForm(){
    this.postEditForm = new FormGroup({
      userId : new FormControl((this.post?this.post.userId: ''), Validators.required),
      id : new FormControl((this.post?this.post.id: ''), Validators.required),
      title : new FormControl((this.post?this.post.title: ''), Validators.required),
      body : new FormControl((this.post?this.post.body:''), Validators.required)
    })
  }

  edit(){
    let formValues = this.postEditForm.value;
    let post = this.postService.createPost(formValues.userId, formValues.id, formValues.title, formValues.body);
    this.postService.editPost(this.indice, post);
    this.router.navigate(["/posts"]);

  }

  ngOnInit(): void {

    //console.log("Avant subscribe");
    this.activateRoute.params.subscribe(
      params => {
        this.indice = params['id'];
        //console.log('dans subscribe');
        this.post = this.postService.getPost(this.indice);
        this.initForm();
      }
    );

    //console.log("Après subscribe");



  }

}
