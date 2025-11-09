import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../app/core/models/model';

@Component({
  selector: 'app-card-movie',
  imports:[CommonModule],
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent  {

 @Input() movie!:Movie;

}
