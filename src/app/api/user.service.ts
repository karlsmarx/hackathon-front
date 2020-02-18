import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:3333/user';

	constructor(private requestService: RequestService) { }

	async create(userInfo) {
		const response  = await this.requestService.post(`${this.url}`, userInfo);
		localStorage.setItem('UserId', response._id);
		return  response;
  }
  
	async login(userInfo) {
		return this.requestService.post(`${this.url}/login`, userInfo);
  }
  
	async update(userInfo) {
		return this.requestService.put(`${this.url}`, userInfo);
	}

	async read(userId) {
		return this.requestService.get(`${this.url}/${userId}`);
	}

	async groups(userId) {
		return this.requestService.get(`${this.url}/${userId}/groups`);
	}

	async loans(userId) {
		return this.requestService.get(`${this.url}/${userId}/loans`);
	}


}
