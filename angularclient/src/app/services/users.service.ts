import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, delay, Observable, retry, throwError} from "rxjs";
import {IUser} from "../model/IUser";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:8080/')
      .pipe(
        delay(100),
        retry(2),
        catchError(this.errorHandler.bind(this))
      )
  }

  create(user: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:8080/', user)
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
