import { Component } from '@angular/core';
import { LoanService } from '../../api/loan.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  private userInfo: any = {
    score: 680
  }

  constructor(private loanService: LoanService){

  }

  async validateLoan(){ 
    await this.loanService.validateLoan({});
  }
}
