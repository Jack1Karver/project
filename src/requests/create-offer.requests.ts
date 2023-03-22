import api from "../http/connect";
import { IAuthor } from "../models/author.model";
import { IBookLiteraly } from "../models/book-literaly.model";
import { IOfferList } from "../models/offer-list.model";

export const createOfferRequest = async(userId: number, offer: IOfferList, book: IBookLiteraly, author: IAuthor, categories: string[]) => {
    const res = api.post('/offer', {idUser: userId, book, offer, author, categories})
    return res
};
