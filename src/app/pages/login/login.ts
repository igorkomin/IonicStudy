import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { GoogleAuthService } from '../../shared/google-auth.service';
import { HomePage } from '../../home/home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private authService: GoogleAuthService) {
  }

  showAlert(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  googleLogin() {
    this.authService.googleLogin().then(
      data => {
        if (data) {
          this.navCtrl.setRoot(HomePage);
        }
      },
      error => {
        if (error.code != 'auth/popup-closed-by-user') {
          this.showAlert('Error!', error);
        }
      }
    );
  }
}
