import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations: [
        RecipeStartComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {

}