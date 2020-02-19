import { Component, OnInit } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Router, RouterEvent, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  pages = [
    {
      title: 'Perfil',
      url: null,
      icon: 'person'
    },
    {
      title: 'Meus grupos',
      url: null,
      icon: 'people'
    },
    {
      title: 'Score',
      url: null,
      icon: 'trophy'
    },
    {
      title: 'Buscar grupos',
      url: null,
      icon: 'search'
    },
    {
      title: 'Meus contratos',
      url: null,
      icon: 'document'
    },
    {
      title: 'Sair',
      url: '',
      icon: 'log-out'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp()
   
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map(p => {
          return (p['active'] = event.url === p.url)
        })
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.statusBar.backgroundColorByHexString('#29D28D');
      this.splashScreen.hide()
    })
  }
}
