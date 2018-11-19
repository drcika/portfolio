import { trigger, group, animate, style, transition, query, stagger } from "@angular/animations";

export const enteringAnimationsTrigger = trigger('enteringAnimations', [
  transition(':enter', [
    group([
      query('header', [
        style({ height: '50%' }),
        animate('1000ms 2800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ height: '15%' }))
      ]),

      query('main', [
        style({ height: 0, paddingTop: 0 }),
        animate('1000ms 2800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ height: '78%' }))
      ]),

      query('.container', [
        style({ opacity: 0 }),
        animate('700ms 500ms ease-in', style({ opacity: 1 }))
      ]),

      query('.loader-line', [
        style({ width: 0, opacity: 1 }),
        animate('1400ms 1500ms cubic-bezier(0.19, 1, 0.22, 1)', style({ width: '100%' })),
        animate('100ms', style({ opacity: 0 })),
      ]),

      query('ul li', [
        style({ opacity: 0 }),
        stagger(-400, [
          animate('300ms 3500ms ease-in-out', style({ opacity: 1 })),
        ]),
      ]),

      query('small', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms 3500ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),

    ])// group
  ])//transition
]);// trigger

export const fadeTrigger = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('400ms 200ms ease-in-out', style({ opacity: 1 })),
  ])//transition
]);// trigger

export const contentTrigger = trigger('contentAnimations', [
  transition(':enter', [
    group([

      query('.mat-tab-label-content', [
        style({ opacity: 0, transform: 'translate(-15%, -15%)' }),
        stagger(300, [
          animate('500ms 200ms ease-in-out', style({ opacity: 1, transform: 'translate(0, 0)' })),
        ]),
      ]),

      query('img', [
        style({ opacity: 0, transform: 'translateX(-15%)' }),
        animate('500ms 800ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),

      query('.summary', [
        style({ opacity: 0, transform: 'translateX(15%)' }),
        animate('500ms 800ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),

    ])//group
  ])//transition
]);// trigger

export const skillsTrigger = trigger('skillsAnimations', [
  transition('*=>*', [

    query('li', [
      style({ opacity: 0, transform: 'translateX(-5%)' }),
      stagger(300, [
        animate('500ms 1800ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),

  ])//transition
]);// trigger