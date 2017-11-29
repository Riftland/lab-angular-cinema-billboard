import { Injectable } from '@angular/core';
// import { IMovies } from '../interfaces/IMovies';
import { listMovies } from '../sample-movies';

@Injectable()
export class CinemaService{

  //Properties from interface
  // id:number;
  // title:string;
  // poster:string;
  // synopsis:string;
  // genres:Array<string>;
  // year:number;
  // director:string;
  // actors:Array<string>;
  // hours:Array<string>;
  // room:number;

  movies:Array<object> = listMovies;

  getMovies(){
    return this.movies;
  }

  getMovie(id:number){
    return this.movies[id];
  }
}
