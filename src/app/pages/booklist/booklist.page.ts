import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoanService } from 'src/app/services/loan.service';
import { LendBookPage } from '../lendbook/lendbook.page';

@Component({
  selector: 'app-booklist',
  templateUrl: 'booklist.page.html',
  styleUrls: ['booklist.page.scss']
})
export class BookListPage {

  bookList = [];

  constructor(private modalCtrl: ModalController,
    private loanService: LoanService) {}

    ionViewWillEnter() {
      this.bookList = this.loanService.bookList.slice();
    }

  async onLoadBook(index: number) {
    const modal = await this.modalCtrl.create({
      component: LendBookPage,
      componentProps: {
        'index': index
      }
    });
    modal.present();
  }


}
