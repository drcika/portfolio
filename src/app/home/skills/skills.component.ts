import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { dataModel } from '../data.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  private data: dataModel;

  ngOnInit() {
    this.sharedService.getData()
    .subscribe((data: dataModel): void => {
      this.data = data;
    });
  }

}
