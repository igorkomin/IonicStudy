import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleAuthService } from '../../shared/google-auth.service';
import { LoginPage } from '../../login/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: GoogleAuthService) {
  }

  ionViewDidLoad(){
    this.userName = this.authService.getUserInfo().displayName;
  }

  signOut() {
    this.authService.signOut().then(
      () => this.navCtrl.setRoot(LoginPage)
    );
  }
}