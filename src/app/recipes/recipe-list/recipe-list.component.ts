import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe1', 'This is test desc', '../../../assets/images/tomato.jpg'),
    new Recipe('Test Recipe2', 'This is test desc', '../../../assets/images/tomato.jpg'),
    new Recipe('Test Recipe3', 'This is test desc', '../../../assets/images/tomato.jpg'),
    new Recipe('Test Recipe4', 'This is test desc', '../../../assets/images/tomato.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
