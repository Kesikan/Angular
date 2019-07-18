import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';


  constructor(private service: PostService) {

  }

  ngOnInit() {
    this.service.getPostes()
    .subscribe(res => {
      this.posts = res.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = "";
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      });


  }
  updatePost(post) {
    post.title = "titlsklf"
  }

  deletePost(post)
  {
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }


}
