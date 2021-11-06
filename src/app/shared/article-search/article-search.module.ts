import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ArticleSearchService } from './article-search.service';
import { ArticleSearchComponent } from './article-search/article-search.component';

@NgModule({
  declarations: [
    ArticleSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    ArticleSearchComponent
  ],
  providers: [
    ArticleSearchService
  ]
})
export class ArticleSearchModule { }
