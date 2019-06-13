import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message = "...";

  // NavController
  constructor(private nav: NavController) {

  }

  signIn(username, password) {
    console.log('OK', username, password);


    if (username === 'admin' && password === '1234') {
      this.nav.navigateForward('/dashboard');
    } else {
      this.message = "Please check username and password, try again";
    }

    alert(this.message);
  }

  recoverPassword() {
    console.log('Recovering password...');
  }

}
