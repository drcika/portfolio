import { Component, OnInit } from '@angular/core';
import { fadeTrigger, contentTrigger, skillsTrigger } from '../animations';
import { SharedService } from './shared.service';
import { AnimationsService } from '../animations.service';
import { dataModel } from './data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeTrigger, contentTrigger, skillsTrigger]
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: SharedService, private animationsService: AnimationsService) { }

  data: dataModel;
  anime = false;

  ngOnInit() {
    this.sharedService.getData()
      .subscribe((
        data: dataModel): void => {
        this.data = data;
      },
        error => {
          this.sharedService.dialogError(error);
        });
  }

  tabChanged(event) {

    if (event.tab.textLabel === 'Skills') {
      this.anime = true;
    }
    this.animationsService.anime(event.tab.textLabel);
  }

}
