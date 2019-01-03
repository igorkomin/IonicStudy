import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { LoginPage } from './pages/login/login';
import { GoogleAuthService } from './shared/google-auth.service';
import { Toast } from '@ionic-native/toast';

const firebaseConfig = {
    apiKey: "AIzaSyBm7nU1546f3Ak3e7TmY7u_Kr4xk_u4tNw",
    authDomain: "bamboo-weft-227409.firebaseapp.com",
    databaseURL: "https://bamboo-weft-227409.firebaseio.com",
    projectId: "bamboo-weft-227409",
    storageBucket: "bamboo-weft-227409.appspot.com",
    messagingSenderId: "453175894946"
}

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage,
    LoginPage
  ],
  providers: [
    GoogleAuthService,
    GooglePlus,
    SplashScreen,
    StatusBar,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
