import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
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
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    ArticleListComponent
  ]
})
export class ArticleListModule { }
