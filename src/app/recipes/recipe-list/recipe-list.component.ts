import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('A Test Recipe','This is simply a test.','https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
		new Recipe('Another Test Recipe','This is simply another test.','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
	];

	constructor() {
	}

	ngOnInit(): void {
	}

}
