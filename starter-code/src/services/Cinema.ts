import { Injectable } from '@angular/core';
import { IMovies } from '../interfaces/IMovies';

@Injectable()
export class CinemaService implements IMovies{

  //Properties from interface
  id:number;
  title:string;
  poster:string;
  synopsis:string;
  genres:Array<string>;
  year:number;
  director:string;
  actors:Array<string>;
  hours:Array<string>;
  room:number;

  movies:Array<IMovies> = [];

  getMovies(){
    return this.movies;
  }

  getMovie(id:number){
    return this.movies[id];
  }
}
