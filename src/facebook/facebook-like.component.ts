import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'ase-fb-like',
  templateUrl: './facebook-like.component.ts',
})
export class FacebookLikeComponent implements AfterViewInit {
  @Input()
  url = location.href;

  constructor() {
    if (!window['fbAsyncInit']) {
      window['fbAsyncInit'] = function() {
        window['FB'].init({
          appId: 'your-app-id', // TODO(asgarli): read this from module config
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v3.0',
        });
      };
    }

    const url = 'https://connect.facebook.net/en_US/sdk.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    window['FB'] && window['FB'].XFBML.parse();
  }
}
