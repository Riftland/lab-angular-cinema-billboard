import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/Cinema';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  listMovies:Array<object> = new Array<object>();

  constructor(private Cinema: CinemaService) { }

  ngOnInit() {
    this.listMovies = this.Cinema.getMovies();
  }

}
