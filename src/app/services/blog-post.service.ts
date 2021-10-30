import { Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BlogPost } from '../core/blog-post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  blogPosts$: Observable<BlogPost[]> = this.scully.available$.pipe(
    map(this.onlyPublished),
    map(this.toBlogPosts),
    shareReplay(1)
  );

  constructor(private scully: ScullyRoutesService) {}

  private onlyPublished(routes: ScullyRoute[]) {
    return routes.filter(route => route.published);
  }

  toBlogPosts(routes: ScullyRoute[]): BlogPost[] {
    return routes.map(route => (<BlogPost>{
      ...route,
      dateOfPublication: route.dateOfPublication && new Date(route.dateOfPublication),
    }));
  }

}
