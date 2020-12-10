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
  posts = new Array<Post>();

  constructor(private postService : PostService, private router : Router) { }

  goToAdd(){
    this.router.navigate(["/posts", "add"]);
  }

  delete(indice : number){
    this.postService.deletePost(indice);
  }


  editer(indice : number){
    this.router.navigate(['/posts', 'edit', indice])
  }
  ngOnInit(): void {

    this.postService.getPosts().subscribe(
      resultat =>{
        this.posts = resultat;
        //console.log("success");
        return this.posts;
      }
    )
  }

}
