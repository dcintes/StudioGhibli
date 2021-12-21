import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private BASE_API_URL: string = "https://ghibliapi.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.BASE_API_URL+'films');
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(this.BASE_API_URL+'films/'+id);
  }
}
