import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgramServiceProvider } from '../../providers/program-service/program-service'

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html'
})
export class ProgramPage {
  scheduleItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public programProvider: ProgramServiceProvider) {
    this.getScheduleItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }

  getScheduleItems() {
    this.programProvider.getScheduleItems()
    .then(data => {
      this.scheduleItems = data;
      console.log(this.scheduleItems);
    });
  }

}
