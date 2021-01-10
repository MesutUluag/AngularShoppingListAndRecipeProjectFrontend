import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';


export class RecipeService {
  recipeSelected= new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('Recipe-1', 'Test Recipe', 'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg'),
    new Recipe('Recipe-2', 'Test Recipe-2', 'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg')];


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
