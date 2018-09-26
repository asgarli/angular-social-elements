import { NgModule } from '@angular/core';
import { FacebookLikeComponent } from './facebook/facebook-like.component';
import { GooglePlusComponent } from './google/google-plus.component';
import { LinkedInShareComponent } from './linkedin/linkedin-share.component';
import { PinItComponent } from './pinterest/pin-it.component';
import { TweetComponent } from './twitter/tweet.component';

@NgModule({
  imports: [
  ],
  declarations: [
    FacebookLikeComponent,
    GooglePlusComponent,
    LinkedInShareComponent,
    PinItComponent,
    TweetComponent,
  ],
  exports: [
    FacebookLikeComponent,
    GooglePlusComponent,
    LinkedInShareComponent,
    PinItComponent,
    TweetComponent
  ]
})
export class AngularSocialElementsModule { }
