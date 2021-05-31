import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: any;
  @ViewChild('trailer', { static: true })
  trailer!: ElementRef<HTMLVideoElement>;
  imagesWay: string = '';
  toggled = false;
  selected: any;
  selectedChange: any;
  
  

  constructor(private moviesService: MoviesService) {
    this.imagesWay = this.moviesService.imagesWay;
    console.log(this.imagesWay, "teste")
  }

  ngOnInit(): void {
  }

  public toggle() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    }
     
      
    

  


  // playVideo() {

  //   this.trailer.nativeElement.currentTime = 0;
  //   this.trailer.nativeElement.play();
  // }

  // stopVideo(){

  //   this.trailer.nativeElement.pause();
  // }

  

}
