import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { List2Component } from './list2/list2.component';
import { AddComponent } from './posts/add/add.component';
import { EditComponent } from './posts/edit/edit.component';
import { ListComponent } from './posts/list/list.component';

const routes: Routes = [
  {path : 'posts', component: ListComponent},
  {path : 'posts2', component:List2Component},
  {path : 'posts/details/:id', component : DetailsComponent},
  {path : 'posts/add', component: AddComponent},
  {path : 'posts/edit/:id', component : EditComponent},
  {path : '', redirectTo : 'posts2', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
