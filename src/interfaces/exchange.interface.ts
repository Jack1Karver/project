import { IAuthor } from '../models/author.model';
import { IBookLiteraly } from '../models/book-literaly.model';
import { ICategory } from '../models/category.module';
import { IUserAddress } from '../models/user-address.model';
import { IUserExtended } from '../models/user.model';

export interface IExchangeUser {
  id: number;
  isBoth: boolean;
  myOffer: {
    author: IAuthor;
    book: IBookLiteraly;
    isSubmit: boolean;
    trackNumber?: string;
    receiving?: boolean;
    idOffer: number;
  };
  userOffer: {
    user: IUserExtended;
    categories: ICategory[];
    isSubmit: boolean;
    trackNumber?: string;
    receiving?: boolean;
    address: IUserAddress;
  };
}
