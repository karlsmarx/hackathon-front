import { Component } from '@angular/core'
import { LoanService } from '../../api/loan.service'
import { UserService } from '../../api/user.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private userService: UserService) {}

  async validateLoan() {
    await this.userService.create({
      email: 'thalesburakowski134@gmail.com',
      fullName: 'thales vinicius',
      cpf: '123.456.789.0112',
      senha: '123456'
    })
  }
}
