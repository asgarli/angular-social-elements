import { Component,  AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'se-google-plus',
  template: `<span class="g-plusone" [attr.data-href]="url" data-size="medium"></span>`,
})
export class GooglePlusComponent implements AfterViewInit {
  @Input()
  url = location.href;

  constructor() {
    const url = 'https://apis.google.com/js/platform.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      const script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    window['gapi'] && window['gapi'].plusone.go();
  }
}
