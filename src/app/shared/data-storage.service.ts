import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from './../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
        const url = 'https://ng-recipe-book-7bc24.firebaseio.com/recipes.json';
        console.log(this.recipeService.getRecipes());
        return this.http.put(url, this.recipeService.getRecipes());
    }
    getRecipes() {
        const token = this.authService.getToken();
        console.log('Token: ' + token);

        const url = 'https://ng-recipe-book-7bc24.firebaseio.com/recipes.json?auth=' + token;
        this.http.get(url)
            .subscribe(
                (recipes: Recipe[]) => {
                    console.log('Data Saved! ---', recipes);
                    for (let recipe of recipes) {
                        if (!recipe.ingredients) {
                            console.log('add ingredient prop @ ', recipe);
                            recipe.ingredients = [];
                        }
                    };
                    this.recipeService.setRecipes(recipes);
                    console.log('Data Saved Again! ---', recipes);
                },
                (error) => {
                    console.log('Data Saving Failed! ---', error);
                }
            );
    }

}