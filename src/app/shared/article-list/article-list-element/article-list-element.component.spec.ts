import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListElementComponent } from './article-list-element.component';

describe('ArticleListElementComponent', () => {
  let component: ArticleListElementComponent;
  let fixture: ComponentFixture<ArticleListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
