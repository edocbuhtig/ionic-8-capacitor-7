import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { InAppBrowser } from '@capacitor/inappbrowser';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonButton,  IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }
   
ngOnDestroy() {
//Remove All Listeners
InAppBrowser.removeAllListeners();

  }

 async OpenExternal(){
//

// import { InAppBrowser } from '@capacitor/inappbrowser';
// Capacitor Function to open in external browser
await InAppBrowser.openInExternalBrowser({
    url: "https://capacitorjs.com/docs/apis/inappbrowser"
});



  }

}
