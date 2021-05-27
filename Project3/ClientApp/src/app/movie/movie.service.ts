import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Movie } from './movie.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public loadMovies() {
   return this.http.get<Movie[]>(this.baseUrl + 'api/movies');
  }

  public deleteMovie(movie: Movie) {
   return this.http.delete(this.baseUrl + 'api/movies/' + movie.id);
  }

}
