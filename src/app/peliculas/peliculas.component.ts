import { Component, OnInit} from '@angular/core';
import { TmdbService } from '../app/core/services/tmdb.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../app/core/models/model';
import { CardMovieComponent } from '../card-movie/card-movie.component';

@Component({
  selector: 'app-peliculas',
  imports: [CommonModule, CardMovieComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {

  
    constructor(private tmbd: TmdbService){}
  
    trendingMovies: Movie[] = [];
  
    ngOnInit(): void {
        this.tmbd.getTrendingMovies(1).subscribe({
          next: (data) => this.trendingMovies=data.results, 
          error: (err) => console.log(err),
        });
    }

}
