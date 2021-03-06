import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = "http://jservice.io/api";
  constructor(private http: HttpClient) { }


  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]> (`${this.apiUrl}/categories/?count=100`);
  }
}
