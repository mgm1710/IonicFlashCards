import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, PopoverController } from 'ionic-angular';
import { WordService } from '../../providers/word-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('myNav') nav: NavController

  public allWords: Array<any>;

  itemSelected(item: string) {
    console.log("Selected Item", item);
    // this.navCtrl.push(DetailsPage);
  }

  constructor(public platform: Platform, public navCtrl: NavController, private wordService: WordService, public popoverCtrl: PopoverController) {
    this.allWords = wordService.getAll();
  }

  showMoreOptions(myEvent) {
    // let popover = this.popoverCtrl.create(PopoverPage);
    // popover.present({
    //   ev: myEvent
    // });
  }
  
}
