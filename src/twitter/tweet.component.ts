import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'ase-tweet',
  templateUrl: 'tweet.component.html',
})
export class TweetComponent implements AfterViewInit {
  @Input()
  url = location.href;

  @Input()
  text = '';

  constructor() {
    const url = 'https://platform.twitter.com/widgets.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    window['twttr'] && window['twttr'].widgets.load();
  }
}
