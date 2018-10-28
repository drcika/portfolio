import { Injectable } from '@angular/core';
import * as anime from 'animejs';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }
  
  addPages() {
    document.getElementById('content').innerHTML = '<router-outlet></router-outlet>';
  }
  enterinAnimations() {
    let loader = anime({
      targets: '.loader-line',
      opacity: 0,
      duration: 100,
      delay: 2700,
      easing: 'easeOutBack'
    });
    let bottom = anime({
      targets: '.bottom',
      translateY: '85%',
      duration: 800,
      delay: 3000,
      easing: 'easeOutBack',
      complete: this.addPages
    });
    let top = anime({
      targets: '.top',
      translateY: '-75%',
      duration: 1000,
      delay: 2800,
      easing: 'easeOutBack'
    });
  }

}
