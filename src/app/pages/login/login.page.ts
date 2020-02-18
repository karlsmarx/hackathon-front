import { MenuController, IonSlides, NavController } from '@ionic/angular';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  @ViewChild ('slides') slides: IonSlides;
  slideOpts = {
    zoom: false
  };


  constructor(
    private menuCtrl: MenuController, private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  skip(){
    this.slides.slideTo(2);
  }

  signup(){
    this.navCtrl.navigateForward('signup');
  }

  openHome(){
    this.navCtrl.navigateForward('home');
  }

  ngOnDestroy() {
    this.menuCtrl.enable(true);
  }
}
