import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-full-banner',
  templateUrl: './full-banner.component.html',
  styleUrls: ['./full-banner.component.scss']
})
export class FullBannerComponent implements OnInit {

  @Input() movieDestaque: any;
  @Input() movieId: string = '';
  imagesWay:string = '';
  
  
  constructor(private moviesService: MoviesService) {
    this.imagesWay = this.moviesService.imagesWay;
  }


  ngOnInit(): void {

  }

}
