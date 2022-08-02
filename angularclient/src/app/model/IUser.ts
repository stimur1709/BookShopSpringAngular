import {IBook} from "./IBook";

export interface IUser {
  id?: number
  name: string
  email: string
  books?: IBook[]
}
