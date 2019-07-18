import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url = 'http://asjsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {

  }

  getPostes()
  // tslint:disable-next-line:one-line
  {
    return this.http.get(this.url);
  }

  createPost(post: any): any
  // tslint:disable-next-line:one-line
  {
    return this.http.post(this.url, JSON.stringify(post))

  }

  updatePost()
  // tslint:disable-next-line:one-line
  {

  }

  deletePost(id: any)
  // tslint:disable-next-line:one-line
  {
    return this.http.delete(this.url + '/' + id);
  }

}
