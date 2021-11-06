import { Injectable, OnDestroy } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { Article } from 'src/app/core/article.interface';
import { ArticleService } from 'src/app/services/article.service';

import {
  ArticleSearch,
  equalsArticleSearch,
  filterByArticleSearch
} from './article-search.interface';

@Injectable()
export class ArticleSearchService implements OnDestroy {

  private filteredArticlesSubject = new ReplaySubject<Article[]>();
  filteredArticles$ = this.filteredArticlesSubject.asObservable();

  private tagSuggestionsSubject = new ReplaySubject<string[]>();
  tagSuggestions$ = this.tagSuggestionsSubject.asObservable();

  predefinedTagSuggestions = this.articleService.predefinedTagSuggestions$;

  constructor(
    private articleService: ArticleService
  ) {}

  ngOnDestroy(): void {
    this.filteredArticlesSubject.next();
    this.filteredArticlesSubject.complete();
    this.tagSuggestionsSubject.next();
    this.tagSuggestionsSubject.complete();
  }

  filterTagSuggestionsFromSource(source: Observable<ArticleSearch>) {
    source.pipe(
      debounceTime(150),
      distinctUntilChanged(equalsArticleSearch),
      startWith(<ArticleSearch>{ query: '' }),
      switchMap((search: ArticleSearch) => this.predefinedTagSuggestions.pipe(
        map(predefinedSuggestions => filterByArticleSearch(search, predefinedSuggestions))
      )),
    ).subscribe(this.tagSuggestionsSubject)

  }

  searchFromSource(source: Observable<ArticleSearch>) {
    source.pipe(
      debounceTime(300),
      distinctUntilChanged(equalsArticleSearch),
      switchMap(search => {
        const query = search.query?.trim();
        return this.articleService.search(query);
      })
    ).subscribe(this.filteredArticlesSubject);
  }

  search(search: ArticleSearch) {
    this.articleService
      .search(search.query?.trim())
      .subscribe(this.filteredArticlesSubject);
  }

}
