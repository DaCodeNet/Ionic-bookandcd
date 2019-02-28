import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-lendcd',
  templateUrl: './lendcd.page.html',
  styleUrls: ['./lendcd.page.scss'],
})
export class LendCdPage implements OnInit {

  constructor(private modalCtrl: ModalController,
    public loanService: LoanService,
    public navParams: NavParams) {}

    cd: any;
    index: number;

    ngOnInit() {
      this.index = this.navParams.get('index');
      this.cd = this.loanService.cdList[this.index];
    }

    dismissModal() {
      this.modalCtrl.dismiss();
    }

    onToggleCD() {
      this.cd.isLoan = !this.cd.isLoan;
    }

}
