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
      bar.animate(animation, {
        duration: 800 * random,
        iterations: Infinity,
        easing: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        delay: 100 * random
      })
    }
  }

  animePortfolio() {
    let projects = Array.from(document.querySelectorAll('.project'));

    for (let i = 0; i < projects.length; i++) {
      projects[i].setAttribute("style", "opacity:0;");

      let projectsKeyframes: any = [
        { opacity: "0", transform: 'translateY(-15%)', offset: 0},
        { opacity: "1", transform: 'translateY(0)', offset: 1 },
      ];

      projects[i].animate(projectsKeyframes, {
        duration: 1000,
        easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
        delay: i * 200
      }).onfinish = function () {
        projects[i].setAttribute("style", "opacity:1;");
      }
    }
  }
}
