import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticleRoutingModule } from './article-routing.module';
import { PublicModule } from './public/public.module';
import { ApiModule } from './typescript-angular-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PublicModule,
    ApiModule,
    ArticleRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
