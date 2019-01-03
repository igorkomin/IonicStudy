import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../shared/auth.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthService) {
  }

  ionViewDidLoad(){
    this.userName = this.authService.getUserInfo();
  }

  signOut() {
    this.authService.signOut().then(
      () => this.navCtrl.setRoot(LoginPage)
    );
  }
}