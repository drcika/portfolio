import { Component, OnInit } from '@angular/core';
import { dataModel } from '../data.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  private data: dataModel;

  ngOnInit() {
    this.sharedService.getData()
    .subscribe((data: dataModel): void => {
      this.data = data;
    });
  }

}
