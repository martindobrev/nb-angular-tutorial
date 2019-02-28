import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticleRoutingModule } from './article-routing.module';
import { PageService } from './page.service';
import { ArticleService } from './article.service';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleViewComponent,
    ArticleListComponent,
    CarouselComponent,
    PageNotFoundComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticleRoutingModule
  ],
  providers: [PageService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
