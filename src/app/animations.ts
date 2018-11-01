import { trigger, group, animate, style, transition, query } from "@angular/animations";

export const enteringAnimationsTrigger = trigger('enteringAnimations', [
  transition(':enter', [
    group([
      query('.top', [
        style({ height: '50%' }),
        animate('1000ms 2800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ height: '12%' }))
      ]),
      
      query('.middle', [
        style({ height: 0, paddingTop: 0 }),
        animate('1000ms 2800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ height: '81%' }))
      ]),
      
      query('.container', [
        style({ opacity: 0 }),
        animate('700ms 500ms ease-in', style({ opacity: 1 }))
      ]),

      query('.loader-line', [
        style({ width: 0, opacity: 1}),
        animate('1400ms 1500ms cubic-bezier(0.19, 1, 0.22, 1)', style({ width: '100%' })),
        animate('100ms', style({ opacity: 0 })),
      ]),
    ])// group
  ])//transition
]);// trigger