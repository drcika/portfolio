import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { ContactModel } from './contact/contact.model';
import { MatDialog } from '@angular/material';
import { MessageComponent } from './contact/message.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient, private db: AngularFirestore, private dialog: MatDialog) { }

  getData() {
    return this.http.get('/assets/data.json');
  }

  addDataToDatabase(msg: ContactModel) {
    this.db.collection('messages').add(msg)
      .then(result => {
        this.dialogMsg(msg);
      }).catch((error) => {
        this.dialogError(error);
      });
  }
  dialogError(error) {
    this.dialog.open(MessageComponent, {
      data: {
        error: error
      }
    });
  }

  dialogMsg(contact: ContactModel) {
    this.dialog.open(MessageComponent, {
      data: {
        name: contact.name,
        message: contact.message
      }
    });
  }

}
