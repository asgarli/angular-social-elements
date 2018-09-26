import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'se-fb-like',
  template: `
  <div
    class="fb-like"
    [attr.data-href]="url"
    data-layout="button_count"
    data-action="like"
    data-show-faces="true"
    data-share="true">
  </div>
  `,
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
      const script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    window['FB'] && window['FB'].XFBML.parse();
  }
}
