import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {MatError, MatFormField, MatInput} from '@angular/material/input';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {PostService} from '../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  imports: [
    FormsModule,
    MatInput,
    MatFormField,
    MatCard,
    MatButton,
    MatError
  ]
})
export class PostCreateComponent{
  enteredContent = '';
  enteredTitle = '';

  constructor(public postService: PostService) {
  }

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
