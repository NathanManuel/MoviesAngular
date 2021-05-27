import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ["StyleSheet.css"]
})
export class MovieComponent {
  public movies: Movie[];
  displayedColumns: string[] = ['id', 'name', 'movieL', 'update', 'delete'];

  constructor(private movieService: MovieService) {
    this.loadMovies();
  }
  public deleteMovie(movie: Movie) {
    this.movieService.deleteMovie(movie).subscribe(result => {
      this.loadMovies();
    }, error => console.error(error))
  }

  public loadMovies() {
    this.movieService.loadMovies().subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
}

 
}
