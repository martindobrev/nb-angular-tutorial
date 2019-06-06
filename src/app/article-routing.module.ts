import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './public/article-list/article-list.component';
import { ArticleViewComponent } from './public/article-view/article-view.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { PageComponent } from './public/page/page.component';
import { RxjsDemoComponent } from './public/rxjs-demo/rxjs-demo.component';
import { HomeComponent } from './public/home/home.component';

// order matters
const routes: Routes = [
  
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}, // LAZY LOADING Angular 7
  
  { path: '', component: HomeComponent, children: [
    {path: '', component: ArticleListComponent},
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'rxjs-demo', component: RxjsDemoComponent},
    { path: 'article/:id', component: ArticleViewComponent },
    { path: ':slug', component: PageComponent },
  ]},
  
  { path: '**', component: PageNotFoundComponent }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
