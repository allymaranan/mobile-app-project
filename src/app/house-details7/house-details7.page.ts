import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-house-details7',
  templateUrl: './house-details7.page.html',
  styleUrls: ['./house-details7.page.scss'],
})
export class HouseDetails7Page implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure that you want to reserve a room in this property?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel'
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm'
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
