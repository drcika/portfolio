import { Component, OnInit } from '@angular/core';
import { enteringAnimationsTrigger } from './animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [enteringAnimationsTrigger]
})
export class AppComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    history.pushState(null, null, '/');
    window.addEventListener('popstate', function (event) {
      history.pushState(null, null, '/');
    });
  }

  enteringAnimationsEnd() {
    this.router.navigate(['/home']);
  }
}
