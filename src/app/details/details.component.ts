import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../posts/model/post';
import { PostService } from '../posts/services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id : number;
  post : Post;
  comments : Comment[];

  constructor(private route : ActivatedRoute, private service : PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];

        this.service.getPost(this.id).subscribe(
          params =>{
            this.post = params;
          }
        );

        this.service.getComments(this.id).subscribe(
          comments => {
            this.comments = comments;
          }
        )

      }
    );





  }

}
