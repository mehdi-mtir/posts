import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { PostService } from './services/post.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[PostService]
})
export class PostsModule { }
