import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { ArticleListElementComponent } from './article-list-element/article-list-element.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleListElementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    ArticleListComponent
  ]
})
export class ArticleListModule { }
