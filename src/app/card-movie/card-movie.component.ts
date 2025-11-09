import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../app/core/models/model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  imports:[CommonModule, RouterModule],
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent  {

 @Input() movie!:Movie;

}
