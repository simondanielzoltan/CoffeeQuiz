import { Component, OnInit } from '@angular/core';
import { Category } from '../../category';
import { CategoryService } from '../../category.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[];
  pageNumber: number;
  subscription:Subscription;

  constructor(private route: ActivatedRoute ,private categoryService: CategoryService, private router: Router) {
    router.events.subscribe(event=>{
      if (event instanceof NavigationEnd) {
        this.changeCategories();
      }
    })
  }
  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeCategories(){
    this.pageNumber = Number(this.route.snapshot.paramMap.get('id'));
    this.getCategories();
  }

  getCategories(){
    this.subscription =  this.categoryService.getCategories(this.pageNumber).subscribe(categories=>{
      this.categories=categories;
    });
  }

}
