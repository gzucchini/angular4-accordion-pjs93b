import { animation, trigger, stagger, state, transition, animate, style, group, query, useAnimation } from '@angular/animations';

export const fadeAnimation = animation([
  query(':enter', [
    style({opacity: '0'}),
    stagger('100ms', animate('{{ duration }}', style({ opacity: '{{ to }}' })))
  ])
    
], { params: { duration: '.21s', to: 1 }});

