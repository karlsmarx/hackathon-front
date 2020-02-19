import { Component } from '@angular/core'
import { UserService } from '../../api/user.service'
import { NavController } from '@ionic/angular'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast'

@Component({
  selector: 'app-group',
  templateUrl: 'group.page.html',
  styleUrls: ['group.page.scss']
})
export class GroupPage {
  constructor(private navCtrl: NavController) {}

  userId = ''
  userInfo: any = {}
  myGroups: any = []
  myLoans: any = []
  tab: any = 'DETAILS'
  box: any = 'YOU'

  async ngOnInit() {
   
  }

  goBack(){
    this.navCtrl.goBack();
  }

  segmentChanged(value){
    this.tab = value;
  }

  changeBox(value){
    this.box = value;
  }
}
