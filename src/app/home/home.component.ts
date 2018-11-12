import { Component, OnInit } from '@angular/core';
import { pageAnimationsTrigger } from '../animations';
import { SharedService } from './shared.service';
import { AnimationsService } from '../animations.service';
import { dataModel } from './data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [pageAnimationsTrigger]
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: SharedService, private animationsService: AnimationsService) { }
  
  private data: dataModel;

  ngOnInit() {
    this.sharedService.getData()
      .subscribe((data: dataModel): void => {
        this.data = data;
      });
  }
  tabChanged(event) {
    if (event.tab.textLabel === 'Skills') {
      this.animationsService.animeSkills();
    }
  }
}
