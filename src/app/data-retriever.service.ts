import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPost(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  getComments(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId='+id);
  }
}
