import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit {

  imagesWay: string = '';
  @Input() title: any;
  @Input() list:  any;
  
  constructor(){
    
  }
  ngOnInit(): void {
  }

  
  
}
