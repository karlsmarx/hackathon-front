import { MenuController, IonSlides, NavController } from '@ionic/angular';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UserService } from '../../api/user.service';

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

  private loginInfo: any = {};
  private showPager: boolean = true;


  constructor(
    private menuCtrl: MenuController, private navCtrl: NavController, private userService: UserService
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  prev(){
    this.slides.lockSwipeToPrev(false);
    this.showPager = true;
    this.slides.slidePrev();
  }

  goToLogin(){
    this.slides.lockSwipeToPrev(true);
    this.slides.slideTo(3);
    this.showPager = false;
  }

  async login(){
    const response = await this.userService.login(this.loginInfo);  
    if (response._id){
      this.navCtrl.navigateForward('home');
    }
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
