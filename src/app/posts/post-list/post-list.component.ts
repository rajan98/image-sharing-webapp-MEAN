import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [
  //   {title: "First Post", content: "This is first post"},
  //   {title: "Second Post", content: "This is second post"},
  //   {title: "Third Post", content: "This is third post"},
  //   {title: "Fourth Post", content: "This is fourth post"}
  // ]
  posts: Post[] = [];
  private postSubs: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postSubs = this.postsService.getPostsUpdateListner()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postSubs.unsubscribe();
  }

}
