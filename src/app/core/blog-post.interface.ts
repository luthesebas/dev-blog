import { ScullyRoute } from '@scullyio/ng-lib';

export interface BlogPost extends ScullyRoute {

  author?: string;
  dateOfPublication?: Date;
  thumbnailUri?: string;
  tags?: string[];

}
