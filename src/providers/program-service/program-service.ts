import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProgramServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgramServiceProvider {
  apiUrl = 'https://ipsyscon2018.de/api/jsonws/IPSYSCON20XX_KongressService-portlet.scheduleitem/get-scheduleitems/veranstaltungsname/IP%20SYSCON%202018';

  constructor(public http: HttpClient) {
    console.log('Hello ProgramServiceProvider Provider');
  }
  
  getScheduleItems() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
