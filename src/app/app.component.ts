import { Component, OnInit } from '@angular/core';
import { AnimationsService } from './animations.service';
import { enteringAnimationsTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [enteringAnimationsTrigger]
})
export class AppComponent implements OnInit{

  constructor(private anime: AnimationsService) {}
  
  ngOnInit(): void {
    this.anime.enterinAnimations();    
  }
}
