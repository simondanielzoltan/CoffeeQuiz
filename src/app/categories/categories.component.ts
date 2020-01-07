import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[];
  pageNumber: number;

  constructor(private route: ActivatedRoute ,private categoryService: CategoryService, private router: Router) {
    router.events.subscribe(event=>{
      if (event instanceof NavigationEnd) {
        this.changeCategories();
    }
    })
  }
  ngOnInit() {}

  changeCategories(){
    this.pageNumber = Number(this.route.snapshot.paramMap.get('id'));
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories(this.pageNumber).subscribe(categories=>{
      this.categories=categories;
    });
  }

}
