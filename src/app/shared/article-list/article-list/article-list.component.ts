import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Article } from 'src/app/core/article.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {

  @Input()
  articles: Article[] | null = null;

}
