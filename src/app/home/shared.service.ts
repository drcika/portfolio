import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { ContactModel } from './contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient,  private db: AngularFirestore) { }
  
  getData() {
    return this.http.get('/assets/data.json');
  }

  addDataToDatabase(msg: ContactModel) {
    console.log(msg);
    this.db.collection('messages').add(msg);
  }
}
