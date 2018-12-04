import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe1', 'This is test1 desc', '../../../assets/images/angular-material.png'),
    new Recipe('Test Recipe2', 'This is test2 desc', '../../../assets/images/angular-ts.png'),
    new Recipe('Test Recipe3', 'This is test3 desc', '../../../assets/images/angular-102.png'),
    new Recipe('Test Recipe4', 'This is test4 desc', '../../../assets/images/Angular-Error.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
