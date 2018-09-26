import { Component,  AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'se-pin-it',
  template: `
  <a
    href="//www.pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}"
    data-pin-do="buttonPin"
    data-pin-config="beside">
  </a>
  `,
})
export class PinItComponent implements AfterViewInit {
  @Input() url = location.href;
  @Input() media = '';
  @Input() description = '';

  constructor() {
    const url = 'https://assets.pinterest.com/js/pinit.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      const script = document.createElement('script');
      script.src = url;
      script['data-pin-build'] = 'parsePins';
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    window['parsePins'] && window['parsePins']();
  }
}
