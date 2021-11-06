import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleListModule } from 'src/app/shared/article-list/article-list.module';
import { ArticleSearchModule } from 'src/app/shared/article-search/article-search.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ArticleListModule,
    ArticleSearchModule
  ]
})
export class HomeModule { }
