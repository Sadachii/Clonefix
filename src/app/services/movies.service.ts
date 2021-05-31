import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private api_key = 'e34b7e1e8a15ff26e6874d510f71a54f';

  imagesWay: string = '';

  constructor(private http: HttpClient) {
    this.imagesWay = 'http://image.tmdb.org/t/p/original';
  }

  getMovieDetails(movieId: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.api_key}`).toPromise();
  }

  getPopularMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=pt-BR&page=1`).toPromise();
  }

  getNowPlayingMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.api_key}&language=pt-BR&page=2`).toPromise();
  }

  getTopRatedMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.api_key}&language=pt-BR&page=4`).toPromise();
  }
  
  getWatchMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}&language=pt-BR&page=2`).toPromise();
  }
  
  getMovies(genero: number): Promise<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/?api_key=${this.api_key}&language=en-US`).toPromise();

  }
}
