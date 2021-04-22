import { Component, Inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html'
})
export class MovieUpdateComponent implements OnInit {
  public id: string;
  public movie: Movie = <Movie>{};

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadMovies();
    });
  }

  public loadMovies(){
  this.http.get<Movie>(this.baseUrl + 'api/movies/' + this.id).subscribe(result => {
    this.movie = result;
  }, error => console.error(error));
}
  public updateMovie() {
    this.http.put(this.baseUrl + 'api/movies/' + this.id,this.movie).subscribe(result => {
      this.router.navigateByUrl("/movies")
    }, error => console.error(error))
}


}


 


