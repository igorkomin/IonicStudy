import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleAuthService } from '../../shared/google-auth.service';
import { HomePage } from '../../home/home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: GoogleAuthService) {
  }
  googleLogin() {
    this.authService.googleLogin().then(
      data => {
        if (data) {
          this.navCtrl.setRoot(HomePage);
        }
      }
    );
  }
}
