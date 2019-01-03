import { Injectable } from "@angular/core";
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from "ionic-angular";

@Injectable()
export class GoogleAuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private googlePlus: GooglePlus,
    private platform: Platform,
  ) { }

  private async nativeGooglelogin(): Promise<firebase.User> {
    const googleUser = await this.googlePlus.login({
      'webClientId': '453175894946-8ne00gn111kr2t07ke712jj708c24k5c.apps.googleusercontent.com',
      'offline': true,
      'scopes': 'profile'
    });
    const credential = await this.angularFireAuth.auth.signInWithCredential(
      firebase.auth.GoogleAuthProvider.credential(googleUser.idToken));
    return credential;
  }

  private async webGoogleLogin(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this.angularFireAuth.auth.signInWithPopup(provider);
  }

  public googleLogin(): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.nativeGooglelogin();
    }
    else {
      return this.webGoogleLogin();
    }
  }

  public getUserInfo(): firebase.User {
    return this.angularFireAuth.auth.currentUser;
  }

  public signOut(): Promise<void> {
    return this.angularFireAuth.auth.signOut();
  }
}