import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }

  animeSkills() {
    let progress = Array.from(document.querySelectorAll('.expand-anime'));

    for (let bar of progress) {
      let random = Math.floor((Math.random() * 10) + 1);
      let animation: any = [{ width: `${10 + random}%`, offset: 0 }, { width: 0, offset: 1 }];
      bar.animate( animation, {
        duration: 800 * random,
        iterations: Infinity,
        easing: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        delay: 100 * random
      })
    }
  }

}
