import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/Cinema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  id:number;
  movie:object;

  constructor(private Cinema: CinemaService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params
      .subscribe((params) => this.id = Number(params['id']) -1);
    this.movie = this.Cinema.getMovie(this.id);
  }

}
