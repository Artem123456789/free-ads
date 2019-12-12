import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../classes/comment/comment';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor() {
    this.newComment = new Comment();
  }

  ngOnInit() {
  }

  private newComment: Comment;
  @Output() onAddComment = new EventEmitter<Comment>();

  private addComment(){
    this.onAddComment.emit(this.newComment);
  }

}
