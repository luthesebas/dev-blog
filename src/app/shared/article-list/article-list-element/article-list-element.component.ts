import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Article } from 'src/app/core/article.interface';

@Component({
  selector: 'app-article-list-element',
  templateUrl: './article-list-element.component.html',
  styleUrls: ['./article-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListElementComponent {

  @Input()
  article!: Article;

}
