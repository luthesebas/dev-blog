import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListElementComponent } from './article-list-element/article-list-element.component';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleListElementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleListModule { }
