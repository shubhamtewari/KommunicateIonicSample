import { Component } from '@angular/core';

import { Kommunicate } from '@ionic-native/kommunicate/ngx'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private kommunicate: Kommunicate) { }

  onClick() {
    var conversationObject = {
        isUnique : false,
        appId : 'applozic-sample-app'
       };
      
      this.kommunicate.conversationBuilder(conversationObject)
         .then((clientChannelKey: any) => console.log("Kommunicate create conversation successful the clientChannelKey is : " + clientChannelKey))
         .catch((error: any) => console.error("Error creating conversation." + error));
  }

}
