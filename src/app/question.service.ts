import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = "http://jservice.io/api";

  constructor(private http: HttpClient) { }

  getRandomQuestion(): Observable<Question[]>{
    return this.http.get<Question[]>(`${this.apiUrl}/random`);
  }

  getQuestionsByCategory(id:number):Observable<Question[]>{
    return this.http.get<Question[]>(`${this.apiUrl}/clues?category=${id}`)
  }
}
