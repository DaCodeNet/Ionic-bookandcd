import { LendCdPageModule } from './pages/lendcd/lendcd.module';
import { LendBookPageModule } from './pages/lendbook/lendbook.module';
import { LendBookPage } from './pages/lendbook/lendbook.page';
import { LendCdPage } from './pages/lendcd/lendcd.page';
import { LoanService } from 'src/app/services/loan.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [LendCdPage, LendBookPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LendBookPageModule, LendCdPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    LoanService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
