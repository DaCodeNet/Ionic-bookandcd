import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-lendbook',
  templateUrl: './lendbook.page.html',
  styleUrls: ['./lendbook.page.scss'],
})
export class LendBookPage implements OnInit {

  constructor(private modalCtrl: ModalController,
    public loanService: LoanService,
    public navParams: NavParams) {}

    book: any;
    index: number;

    ngOnInit() {
      this.index = this.navParams.get('index');
      this.book = this.loanService.bookList[this.index];
    }

    dismissModal() {
      this.modalCtrl.dismiss();
    }

    onToggleBook() {
      this.book.isLoan = !this.book.isLoan;
    }

}
