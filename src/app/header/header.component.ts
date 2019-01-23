import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService, 
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpResponse<any>) => {
          console.log('Response--- ', response);
        },
        (error: HttpResponse<any>) => {
          console.log('Error--- ', error);
        }
      );
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  signout() {
    this.authService.logout();
  }

}
