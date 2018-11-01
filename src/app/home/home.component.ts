import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataModel } from './data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private data: dataModel;

  ngOnInit() {
    this.http.get('/assets/data.json')
      .subscribe((data: dataModel): void => {
      this.data = data;
    });

  }
}
