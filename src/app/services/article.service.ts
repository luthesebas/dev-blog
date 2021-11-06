import { Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Article } from '../core/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles$: Observable<Article[]> = this.scully.available$.pipe(
    map(this.onlyPublished),
    map(this.mapToArticles),
    shareReplay(1)
  );

  predefinedTagSuggestions$ = this.articles$.pipe(
    map(this.mapArticlesToTags),
    shareReplay(1)
  );

  constructor(private scully: ScullyRoutesService) {}

  private onlyPublished(routes: ScullyRoute[]) {
    return routes.filter(route => route.published);
  }

  // TODO: Extract into Mapping Service
  private mapArticlesToTags(articles: Article[]) {
    const tags = articles
      .filter(article => article.tags != null)
      .map(article => article.tags as string[])
      .reduce(
        (allTags, articleTags) => {
          allTags.push(...articleTags);
          return allTags;
        }, []
      );

    return [...new Set(tags)]
  }

  // TODO: Extract into Mapping Service
  private mapToArticles(routes: ScullyRoute[]): Article[] {
    return routes.map(route => {
      let thumbnail = null;
      if (route.thumbnailUri) {
        thumbnail = {
          uri: route.thumbnailUri,
          alt: route.thumbnailAlt ?? 'Thumbnail'
        }
      }

      let dateOfPublication = null;
      if (route.dateOfPublication) {
        dateOfPublication = new Date(route.dateOfPublication);
      }

      return (<Article>{
        ...route,
        thumbnail,
        dateOfPublication,
      });
    });
  }

  search(query?: string) {
    // TODO: Implement
    console.log(`Search articles by slug: '${query}'`)
    return of(<Article[]>[]);
  }

}
