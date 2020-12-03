import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable, Subject } from 'rxjs';

export class PostsService {
    private posts: Post[] = [];
    private postsUpdates = new Subject<Post[]>();

    getPosts(): Post[] {
        return [...this.posts];
    }

    getPostsUpdateListner() : Observable<Post[]>{
        return this.postsUpdates.asObservable();
    }

    addPost(title: string, content: string){
        const post: Post = {title: title, content: content};
        this.posts.push(post);
        this.postsUpdates.next([...this.posts]);
    }
}