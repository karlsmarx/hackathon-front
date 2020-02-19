import { Injectable } from '@angular/core'
import { RequestService } from './request.service'

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private url: string = 'https://hackathon.karls.dev/loan'

  constructor(private requestService: RequestService) {}

  async create(loanInfo) {
    return this.requestService.post(`${this.url}`, loanInfo)
	}
	
  async read(loanId) {
    return this.requestService.get(`${this.url}/${loanId}`)
	}
	
  async approve(loanInfo) {
    return this.requestService.post(`${this.url}/approve`, loanInfo)
	}
	
  async disapprove(loanInfo) {
    return this.requestService.post(`${this.url}/disapproveLoan`, loanInfo)
	}
	
  async confirm(loanInfo) {
    return this.requestService.post(`${this.url}/confirmLoan`, loanInfo)
  }

  async validateLoan(loanInfo) {
    const test = {
      value: 100,
      userId: '5e49a2520b603805d81855f0',
      groupId: '5e49a25a0b603805d81855f1',
      months: 4
    }
    return this.requestService.post(`${this.url}/validate`, test)
  }
}
