import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataRetrieverService } from '../../data-retriever.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title: string;
  body: string;
  postID: number;
  post: any;
  comments: any;
  name: string[] = [];
  email: string[] = [];
  commentBody: string[] = [];


  constructor(private data: DataRetrieverService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.postID = params.id);
  }

  ngOnInit(): void {
    this.data.getPost(this.postID).subscribe(
      data => 
      {
        this.post = data;
        this.title = this.post.title;
        this.body = this.post.body;
      }
    )
    this.data.getComments(this.postID).subscribe(
      data =>
      {
        this.comments = data;
      }
    )
  }
}
