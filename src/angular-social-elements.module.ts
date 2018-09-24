import { NgModule } from '@angular/core';

import { FacebookLikeComponent } from './facebook/facebook-like.component';
import { GooglePlusComponent } from './google/google-plus.component';
import { TweetComponent } from './twitter/tweet.component';
import { LinkedInShareComponent } from './linkedin/linkedin-share.component';
import { PinItComponent } from './pinterest/pin-it.component';

@NgModule({
  declarations: [
    FacebookLikeComponent,
    GooglePlusComponent,
    TweetComponent,
    LinkedInShareComponent,
    PinItComponent
  ],
  exports: [
    FacebookLikeComponent,
    GooglePlusComponent,
    TweetComponent,
    LinkedInShareComponent,
    PinItComponent
  ]
})
export class AngularSocialElementsModule { }
