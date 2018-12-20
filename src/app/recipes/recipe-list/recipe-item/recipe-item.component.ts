import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  // myRecipe: Recipe;

  // constructor(private recipeService: RecipeService) {}


  ngOnInit() {
    // console.log('Index Number: ' + this.index);
    // this.myRecipe = this.recipeService.getRecipe(this.index);
  }


}
