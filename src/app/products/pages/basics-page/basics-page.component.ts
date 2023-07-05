import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = "diego";
  public nameUpper: string = "DIEGO";
  public fullName: string = "dIeGo mEdINa";

  public customDate: Date = new Date();
}
