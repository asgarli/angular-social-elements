import { Component,  AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'ase-pin-it',
  templateUrl: './pin-it.component.html'
})
export class PinItComponent implements AfterViewInit {
  @Input() url = location.href;
  @Input() media = '';
  @Input() description = '';

  constructor() {
    const url = 'https://assets.pinterest.com/js/pinit.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      script['data-pin-build'] = 'parsePins';
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    window['parsePins'] && window['parsePins']();
  }
}
