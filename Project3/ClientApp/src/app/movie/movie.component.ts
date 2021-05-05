import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ["StyleSheet.css"]
})
export class MovieComponent {
  public movies: Movie[];
  displayedColumns: string[] = ['id', 'name', 'movieL', 'update', 'delete'];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadMovies();
  }
  public deleteMovie(movie: Movie) {
    this.http.delete(this.baseUrl + 'api/movies/' + movie.id).subscribe(result => {
      this.loadMovies();
    }, error => console.error(error));
  }

  public loadMovies(){
  this.http.get<Movie[]>(this.baseUrl + 'api/movies').subscribe(result => {
    this.movies = result;
  }, error => console.error(error));
}

 
}


