import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsComponent } from './posts-list/posts/posts.component';

const routes: Routes = [
  {
    path: "posts-list",
    component: PostsListComponent,
  },
  {
    path:'posts/:id',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
