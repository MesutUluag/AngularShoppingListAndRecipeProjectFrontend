import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    //data will be overwritten
    this.http.put('https://recipeandshoppinglistbackend-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {

    });
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://recipeandshoppinglistbackend-default-rtdb.firebaseio.com/recipes.json').subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
