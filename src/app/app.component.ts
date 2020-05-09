import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toolForLOLStats';

  constructor(db : AngularFirestore){
    db.collection("testCollection").doc("testDoc").set({
      //literal se puede guardar cualquier objeto javascript
      "title": "Hello world",
      "value": 5
    })
  }
}
