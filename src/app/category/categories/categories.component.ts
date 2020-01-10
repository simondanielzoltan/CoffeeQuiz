import { Component, OnInit } from '@angular/core';
import { Category } from '../../category';
import { CategoryService } from '../../category.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map , startWith} from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  autocompleteCategories:string[]= [];
  allCategories: Category[];
  categories:Category[] = [];
  subscription:Subscription;;
  myControl = new FormControl;
  filteredOptions:Observable<string[]>;
  inputCategory: string;

  constructor(private route: ActivatedRoute ,private categoryService: CategoryService, private router: Router) {
    router.events.subscribe(event=>{
      if (event instanceof NavigationEnd && this.allCategories) {
        this.changeCategories();
      }
    })
  }
  ngOnInit() {
    this.getCategories();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  navigateToQuestion(){
    console.log(this.inputCategory)
    this.allCategories.forEach(category=>{
      if(category.title===this.inputCategory){
        this.router.navigate([`categories/question/${category.id}`])
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeCategories(){
    let categoryIndex = this.getCategoryIndex()
    this.categories=this.allCategories.slice(categoryIndex,categoryIndex+10);
  }

  getCategoryIndex(){
    const pageNumber = Number(this.route.snapshot.paramMap.get('id'));
    return pageNumber*10-10;
  }

  getCategories(){
    let categoryIndex = this.getCategoryIndex()
    this.subscription=this.categoryService.getAllCategories().subscribe(categories=>{
      this.allCategories=categories;
      categories.forEach(category=> this.autocompleteCategories.push(category.title));
      this.categories=categories.slice(categoryIndex,categoryIndex+10);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.autocompleteCategories.filter(option => option.toLowerCase().includes(filterValue));
  }

}
