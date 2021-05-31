import { Component,OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  movie: any;
  popularMovies: any;
  playingMovies: any;
  topMovies: any;
  watchMovies: any;
  popular = []
  playing = []
  top = []
  watch = []
  
  constructor(private moviesServices: MoviesService){
    this.moviesServices.getMovieDetails("76341")
      .then((res) => {
        console.log(res)
        this.movie = res;
      })
      .catch((error) => {
        console.log(error)
      })
    this.moviesServices.getPopularMovies()
      .then((res) => {
        this.popularMovies = res;
        this.popular = this.popularMovies.results
        console.log(this.popular, "AQUI OH")
        
        
      })
      .catch((error) => {
        console.log(error)
      })

      this.moviesServices.getNowPlayingMovies()
      .then((resu) => {
        this.playingMovies = resu;
        this.playing = this.playingMovies.results
        
      })
      .catch((errorr) => {
        console.log(errorr)
      })

      this.moviesServices.getTopRatedMovies()
      .then((resul) => {
        this.topMovies = resul;
        this.top = this.topMovies.results
        
      })
      .catch((errorrr) => {
        console.log(errorrr)
      })
      
      this.moviesServices.getWatchMovies()
      .then((result) => {
        this.watchMovies = result;
        this.watch = this.watchMovies.results
        
      })
      .catch((errorrrr) => {
        console.log(errorrrr)
      })

  }

}
