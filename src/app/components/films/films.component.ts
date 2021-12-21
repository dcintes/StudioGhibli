import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[];
  spinner: boolean;

  constructor(private filmsService: FilmsService) { 
    this.films = [];
    this.spinner = true;
  }

  ngOnInit(): void {
    this.filmsService.getAllFilms().subscribe((films) => {
      this.spinner = false;
      this.films = films
    });
  }

}
