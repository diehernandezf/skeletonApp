import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userValue: string = '';

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    const userValueFromParam = this.route.snapshot.paramMap.get('userValue');
    if (userValueFromParam !== null) {
      this.userValue = userValueFromParam;
    } else {
      this.userValue = ' '; // Asignar un valor en blanco
    }
  }

  goToLogin(){
    this.navCtrl.navigateForward('/login');
  }

}
