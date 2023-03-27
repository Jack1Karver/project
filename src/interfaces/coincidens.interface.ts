import { IOfferList } from "../models/offer-list.model";
import { IUserAddress } from "../models/user-address.model";
import { IUserExtended } from "../models/user.model";
import { IWishList } from "../models/wish-list.model";

export interface ICoincidences{
    full: ICoincidence[],
    partial: ICoincidence[],
}

export interface ICoincidence{
    wish: IWishList
    offer: IOfferList,
    user: IUserExtended,
    address: IUserAddress
    offerOfferrer?: IOfferList | null,
    wishOfferrer?: IWishList | null
}