import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
//ng g c products/pages/basicsPage --skip-tests
  public nameLower: string = 'roberto';
  public nameUpper: string = 'ROBERTO';
  public fullName: string = 'RoBeRTo';

  public customDate: Date = new Date();
}
