import { Component, OnInit} from '@angular/core';
import { TmdbService } from '../app/core/services/tmdb.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../app/core/models/model';

@Component({
  selector: 'app-explorar',
  imports: [CommonModule],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css'
})
export class ExplorarComponent implements OnInit {

  constructor(private tmbd: TmdbService){}

  trendingMovies: Movie[] = [];

  ngOnInit(): void {
      this.tmbd.getTrendingMovies(1).subscribe({
        next: (data) => this.trendingMovies=data.results, 
        error: (err) => console.log(err),
      });
  }

}
