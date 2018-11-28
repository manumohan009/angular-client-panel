import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public items: Observable<any>;
  constructor(db:AngularFirestore ) {
    this.items = db.collection('/items').valueChanges();
   }

  ngOnInit() {
  }

}
