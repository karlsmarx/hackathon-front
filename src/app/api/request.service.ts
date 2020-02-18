import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AlertController } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(public http: HttpClient, private alertCtrl: AlertController) {}

  async get(endpoint) {
    try {
      const response: any = await this.http
        .get(endpoint, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        })
        .toPromise()
      return response
    } catch (error) {
      return this.handleError(error)
    }
	}
	
  async post(endpoint, data: any) {
    try {
      const response: any = await this.http
        .post(endpoint, JSON.stringify(data), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        })
        .toPromise()
      return response
    } catch (error) {
      return this.handleError(error)
    }
  }

  async put(endpoint, data?: any) {
    try {
      const response: any = await this.http
        .put(endpoint, JSON.stringify(data), {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        })
        .toPromise()
      return response
    } catch (error) {
      return this.handleError(error)
    }
  }

  async handleError(errorReponse) {
    console.log('ERROR', errorReponse)
    const errorAlert = await this.alertCtrl.create({
      header: 'Ops! Ocorreu um erro',
      subHeader: 'Por favor, tente novamente mais tarde.',
      buttons: ['OK']
    })
    errorAlert.present()
  }
}
