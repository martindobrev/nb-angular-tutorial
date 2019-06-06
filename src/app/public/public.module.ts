import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageComponent } from './page/page.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { ApiModule } from '../typescript-angular-client/api.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [    
    ArticleViewComponent,
    ArticleListComponent,
    CarouselComponent,
    PageNotFoundComponent,
    PageComponent,
    RxjsDemoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ]
})
export class PublicModule { }
