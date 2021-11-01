import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleListModule } from 'src/app/shared/article-list/article-list.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ArticleListModule
  ]
})
export class HomeModule { }
