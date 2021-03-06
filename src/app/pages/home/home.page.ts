import { Component } from '@angular/core'
import { UserService } from '../../api/user.service'
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private userService: UserService, private navCtrl: NavController) {}

  userId = ''
  userInfo: any = {}
  myGroups: any = []
  myLoans: any = []

  async ngOnInit() {
    this.userId = localStorage.getItem('UserId')
    this.userInfo = await this.userService.read(this.userId)
    this.myGroups = await this.userService.groups(this.userId)

    if(!this.myGroups.length){      
      this.myGroups = [1,2]
    }
    this.myLoans = await this.userService.loans(this.userId)

    //mock
    this.myLoans.push({
      status:  'Aguardando',
      value: 1200,
      months: 16,
      userId: this.userId,
      group: {},
      approved: [],
      finalValue: 1350,
      tax: 1.5
    })
  }

  transformToMoney(value: number): any {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: "BRL"
    })
  }

  openGroup(group){
    this.navCtrl.navigateForward('group');
  }
}
