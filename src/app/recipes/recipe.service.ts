import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('Recipe-1',
    'Tasty Schnitzel',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Schnitzel_sandwich.jpg',
    [
      new Ingredient('Meat', 1), new Ingredient('French Fries', 20)
    ]),
    new Recipe('Big Fat Burger', 'Big Fat Burger', 'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns',2), new Ingredient('Meat', 1) ]
    )];

  constructor(private slErvice : ShoppingListService) {
  }


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe{
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slErvice.addIngredients(ingredients);
  }
}
