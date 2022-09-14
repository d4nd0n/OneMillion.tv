import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Users } from '../classes/users';
@Injectable({
  providedIn: 'root'
})

export class ClipService {
  constructor(private httpClient: HttpClient) {}
  getUsers() {
    return this.httpClient.get(`https://reqres.in/api/users`).
        pipe(
           map((data: Users[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
}