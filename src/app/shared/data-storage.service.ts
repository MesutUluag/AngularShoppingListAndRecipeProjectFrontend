import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // data will be overwritten
    this.http.put('https://recipeandshoppinglistbackend-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response => {

    });
  }

  fetchRecipes() {
    return this.authService.user.pipe(take(1), exhaustMap(user => { // take(1) only fetches one time
        return this.http.get<Recipe[]>('https://recipeandshoppinglistbackend-default-rtdb.firebaseio.com/recipes.json',
          {// we should add user token as a param
            params : new HttpParams().set('auth', user.token)
          });
      }),
      map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
