import { IAuthor } from "../models/author.model"
import { IBookLiteraly } from "../models/book-literaly.model"
import { ICategory } from "../models/category.module"
import { IUserExtended } from "../models/user.model"

export interface IExchangeUser{
    myOffer: {
        author: IAuthor,
        book: IBookLiteraly
        isSubmit: boolean
    }
    userOffer: {
        user: IUserExtended,
        categories: ICategory[],
        isSubmit: boolean
    }
}