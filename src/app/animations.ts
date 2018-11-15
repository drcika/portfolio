import { trigger, group, animate, style, transition, query, stagger } from "@angular/animations";

export const enteringAnimationsTrigger = trigger('enteringAnimations', [
  // transition(':enter', [
  //   group([
  //     query('header', [
  //       style({ height: '50%' }),
  //       animate('1000ms 2800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ height: '15%' }))
  //     ]),

  //     query('main', [
  //       style({ height: 0, paddingTop: 0 }),
  //       animate('1000ms 2800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ height: '78%' }))
  //     ]),

  //     query('.container', [
  //       style({ opacity: 0 }),
  //       animate('700ms 500ms ease-in', style({ opacity: 1 }))
  //     ]),

  //     query('.loader-line', [
  //       style({ width: 0, opacity: 1 }),
  //       animate('1400ms 1500ms cubic-bezier(0.19, 1, 0.22, 1)', style({ width: '100%' })),
  //       animate('100ms', style({ opacity: 0 })),
  //     ]),

  //     query('ul li', [
  //       style({ opacity: 0 }),
  //       stagger(-500, [
  //         animate('400ms 3500ms ease-in-out', style({ opacity: 1 })),
  //       ]),
  //     ]),

  //     query('small', [
  //       style({ opacity: 0, transform: 'translateX(100%)' }),
  //       animate('500ms 3900ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
  //     ]),

  //   ])// group
  // ])//transition
]);// trigger
export const pageAnimationsTrigger = trigger('pageAnimations', [
  transition(':enter', [
    style({ height: '1%', width: '1%'}),
    animate('700ms 100ms ease-in-out', style({width: '100%'})),
    animate('500ms 100ms ease-in-out', style({height: '95%'}))
  ])//transition
]);// trigger