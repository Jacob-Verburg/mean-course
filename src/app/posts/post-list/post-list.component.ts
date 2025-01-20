import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelActionRow} from '@angular/material/expansion';
import {Post} from '../post.model';
import {PostService} from '../post.service';
import {Subscription} from 'rxjs';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatButton,
    MatExpansionPanelActionRow
  ]
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [
  //   {title:'first post', content:'This is the first post'},
  //   {title:'second post', content:'This is the second post'},
  //   {title:'third post', content:'This is the third post'},
  // ]
  posts:Post[]= [];
  private postsSub: Subscription;

  constructor(public postService:PostService) {
  }

  ngOnInit(){
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[])=> {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
