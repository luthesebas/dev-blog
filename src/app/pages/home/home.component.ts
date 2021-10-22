import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links$: Observable<ScullyRoute[]> = this.scully.available$.pipe(share());

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }

}
