import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageComponent } from './page/page.component';

// order matters
const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'article/:id', component: ArticleViewComponent },
  { path: ':slug', component: PageComponent },
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
