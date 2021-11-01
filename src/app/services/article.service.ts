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

}
