import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageService } from './page.service';
import { ArticleService } from './article.service';
import { ApiModule } from '../typescript-angular-client';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule,
    HttpClientModule
  ],
  providers: [PageService, ArticleService],
})
export class SharedModule { }
