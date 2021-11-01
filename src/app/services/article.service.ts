import { Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Article } from '../core/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles$: Observable<Article[]> = this.scully.available$.pipe(
    map(this.onlyPublished),
    map(this.toArticles),
    shareReplay(1)
  );

  constructor(private scully: ScullyRoutesService) {}

  private onlyPublished(routes: ScullyRoute[]) {
    return routes.filter(route => route.published);
  }

  toArticles(routes: ScullyRoute[]): Article[] {
    return routes.map(route => (<Article>{
      ...route,
      dateOfPublication: route.dateOfPublication && new Date(route.dateOfPublication),
    }));
  }

}
