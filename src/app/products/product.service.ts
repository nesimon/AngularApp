import { Injectable } from "@angular/core";
import { IComponent } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class ProductService {
  private productUrl = 'http://localhost:8080/componentlist';

  constructor(private http: HttpClient) {}

    getProducts(): Observable<IComponent[]> {
        return this.http.get<IComponent[]>(this.productUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
          catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if(err.error instanceof ErrorEvent) {
        errorMessage = 'An error occurred: ${err.error.message}';
      } else {
        errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}