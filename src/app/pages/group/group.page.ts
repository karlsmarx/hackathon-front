import { Component } from '@angular/core'
import { UserService } from '../../api/user.service'

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html',
  styleUrls: ['group.page.scss']
})
export class GroupPage {
  constructor(private userService: UserService) {}

  userId = ''
  userInfo: any = {}
  myGroups: any = []
  myLoans: any = []

  async ngOnInit() {
    this.userId = localStorage.getItem('UserId')
    this.userInfo = await this.userService.read(this.userId)
    this.myGroups = await this.userService.groups(this.userId)
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
}
