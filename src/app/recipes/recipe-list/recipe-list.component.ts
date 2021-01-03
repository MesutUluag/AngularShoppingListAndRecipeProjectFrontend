import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('Recipe-1', 'Test Recipe', 'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg'),
                       new Recipe('Recipe-2', 'Test Recipe-2', 'https://hips.hearstapps.com/delish/assets/17/39/1506456246-delish-healthy-chicken-casserole-1.jpg')];

  constructor() {
  }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
