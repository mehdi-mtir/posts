import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';
import { List2Component } from './list2/list2.component';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    List2Component,
    DetailsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
