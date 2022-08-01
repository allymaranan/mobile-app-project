import { Component, OnInit, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';


@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage {
  @ViewChild ( IonContent, { static:true})
  content: IonContent

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    this.content.scrollToTop(1500);
  }

  scrollToBottom() {
    this.content.scrollToBottom(1500);
  }


}
