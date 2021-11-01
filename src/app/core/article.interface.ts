export interface Article {

  title: string;
  description?: string;
  author?: string;
  dateOfPublication?: Date;
  thumbnail?: {
    uri: string;
    alt: string;
  }
  tags?: string[];
  timeToRead?: string;

}
