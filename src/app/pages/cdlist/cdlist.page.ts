import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoanService } from 'src/app/services/loan.service';
import { LendCdPage } from '../lendcd/lendcd.page';

@Component({
  selector: 'app-cdlist',
  templateUrl: 'cdlist.page.html',
  styleUrls: ['cdlist.page.scss']
})
export class CdListPage {

  cdList = [];

  constructor(private modalCtrl: ModalController,
    private loanService: LoanService) {}

    ionViewWillEnter() {
      this.cdList = this.loanService.cdList.slice();
    }

  async onLoadCD(index: number) {
    const modal = await this.modalCtrl.create({
      component: LendCdPage,
      componentProps: {
        'index': index
      }
    });
    modal.present();
  }

}
