import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './posts/add/add.component';
import { EditComponent } from './posts/edit/edit.component';
import { ListComponent } from './posts/list/list.component';

const routes: Routes = [
  {path : 'posts', component: ListComponent},
  {path : 'posts/add', component: AddComponent},
  {path : 'posts/edit/:id', component : EditComponent},
  {path : '', redirectTo : 'posts', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
