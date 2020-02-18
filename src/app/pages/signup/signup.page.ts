import { MenuController, IonSlides, NavController } from '@ionic/angular';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from '../../api/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, OnDestroy {

  @ViewChild('slides') slides: IonSlides;
  slideOpts = {
    zoom: false
  };

  private userInfo: any = {};

  constructor(
    private menuCtrl: MenuController, private navCtrl: NavController, private userService: UserService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.slides.lockSwipeToNext(true);
  }

  async prev() {
    const index = await this.slides.getActiveIndex();
    if (index == 0) {
      this.goBack();
    }
    else {
      this.slides.slidePrev();
    }
  }

  async next() {
    const index = await this.slides.getActiveIndex();
    if (index == 4) {
      this.signup();
    }
    else {
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToNext(true);
    }
  }

  async signup() {
    await this.userService.create(this.userInfo);
    this.navCtrl.navigateForward('home');
  }

  goBack() {
    this.navCtrl.goBack();
  }

  ngOnDestroy() {
    this.menuCtrl.enable(true);
  }
}
