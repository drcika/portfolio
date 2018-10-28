import { trigger, group, animate, style, transition, query } from "@angular/animations";

export const enteringAnimationsTrigger = trigger('enteringAnimations', [
  transition(':enter', [
    group([
      query('.container', [
        style({ opacity: 0 }),
        animate('700ms 500ms ease-in', style({ opacity: 1 }))
      ]),

      query('.loader-line', [
        style({ width: 0 }),
        animate('1500ms 1500ms cubic-bezier(0.19, 1, 0.22, 1)', style({ width: '100%' }))
      ]),
    ])// group
  ])//transition
]);// trigger