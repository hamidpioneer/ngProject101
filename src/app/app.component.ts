import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor() {}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAqV-hztmP5ghXghhaiPj6p107u2YMzJK0",
      authDomain: "ng-recipe-book-7bc24.firebaseapp.com"
    });

  }
}
