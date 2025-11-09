import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id!: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
