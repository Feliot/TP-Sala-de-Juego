import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
 /*  @Input()resolved($event)6LflksEUAAAAAPAt5DoIupYdHqh9hpLKgHPirnla
 */

  constructor() { }
  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  ngOnInit() {
  }

}
