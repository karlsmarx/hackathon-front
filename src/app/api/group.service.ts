import { Injectable } from '@angular/core'
import { RequestService } from './request.service'

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private url: string = 'https://hackathon.karls.dev/group'

  constructor(private requestService: RequestService) {}

  async read(id) {
    return this.requestService.get(`${this.url}/${id}`)
  }

  async create(groupInfo) {
    return this.requestService.post(`${this.url}`, groupInfo)
  }

  async addUser(groupInfo) {
    return this.requestService.put(`${this.url}/add`, groupInfo)
  }

  async deleteUser(groupInfo) {
    return this.requestService.put(`${this.url}/delete`, groupInfo)
  }

  async approveUser(groupInfo) {
    return this.requestService.put(`${this.url}/pending-approve`, groupInfo)
  }

  async disapproveUser(groupInfo) {
    return this.requestService.put(`${this.url}/pending-disapprove`, groupInfo)
  }

  async update(groupInfo) {
    return this.requestService.put(`${this.url}`, groupInfo)
  }
}
