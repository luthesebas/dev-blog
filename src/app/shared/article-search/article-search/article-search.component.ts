import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable, of } from 'rxjs';

import { ArticleSearchService } from '../article-search.service';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})
export class ArticleSearchComponent implements OnInit {

  search: FormGroup = new FormGroup({
    query: new FormControl()
  });

  suggestions$: Observable<string[]> = this.articleSearchService.tagSuggestions$;

  constructor(
    public articleSearchService: ArticleSearchService
  ) {}

  ngOnInit(): void {
    this.articleSearchService.searchFromSource(this.search.valueChanges);
    this.articleSearchService.filterTagSuggestionsFromSource(this.search.valueChanges);
  }

}
