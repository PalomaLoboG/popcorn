import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { TmdbResponse } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

  base:any = environment.base;
  apiKey: any= environment.apiKey;

  getTrendingMovies(page: number = 1): Observable<TmdbResponse> {
    const url = `${this.base}/trending/movie/week`;
    const params = {
      api_key: this.apiKey,
      language: 'es-ES',
      page: page.toString()
    };
    return this.http.get<TmdbResponse>(url, { params });
  }

}
