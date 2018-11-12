import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataModel } from './data.model';
import { pageAnimationsTrigger } from '../animations';
import * as anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [pageAnimationsTrigger]
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private data: dataModel;
  private animation;

  ngOnInit() {
    this.http.get('/assets/data.json')
      .subscribe((data: dataModel): void => {
        this.data = data;
      });
  }
  tabChanged(event) {
    if (event.tab.textLabel === 'Skills') {
      let progress = Array.from(document.querySelectorAll('.expand2'));

      for (let bar of progress) {
        let random = Math.floor((Math.random() * 10) + 1);
        this.animation = [{ width: `${10 + random}%`, offset: 0 }, { width: 0, offset: 1 }];
        bar.animate(this.animation, {
          duration: 800 * random,
          iterations: Infinity,
          easing: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
          delay: 100 * random
        })
      }
    }
  }
}
