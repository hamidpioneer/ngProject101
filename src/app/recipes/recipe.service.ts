import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe1', 'This is test1 desc', '../../../assets/images/angular-material.png'),
        new Recipe('Test Recipe2', 'This is test2 desc', '../../../assets/images/angular-ts.png'),
        new Recipe('Test Recipe3', 'This is test3 desc', '../../../assets/images/angular-102.png'),
        new Recipe('Test Recipe4', 'This is test4 desc', '../../../assets/images/Angular-Error.jpg')
    ];

    getRecipe() {
        return this.recipes.slice();
    }

}
