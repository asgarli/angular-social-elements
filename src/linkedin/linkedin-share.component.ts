import {
  Component,
  ElementRef,
  AfterViewInit,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ase-linkedin-share',
  template: `<span #element></span>`,
})
export class LinkedInShareComponent implements AfterViewInit {
  @Input()
  url = location.href;

  @ViewChild('element')
  element: ElementRef;

  constructor() {
    const url = 'https://platform.linkedin.com/in.js';
    if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      script.innerHTML = ' lang: en_US';
      document.body.appendChild(script);
    }
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.innerHTML = `<script type="IN/Share" data-url="${
      this.url
    }"></script>`;

    window['IN'] && window['IN'].parse();
  }
}
