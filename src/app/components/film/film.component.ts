import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film.interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film!: Film;

  constructor(private filmsService: FilmsService, private activateRoute: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    const id: string = this.activateRoute.snapshot.paramMap.get('id')+'';

    this.filmsService.getFilm(id).subscribe((film) => {
      if(!film){
        return this.router.navigateByUrl("/");
      }

      this.film = film;
      return;
    });
  }

}
