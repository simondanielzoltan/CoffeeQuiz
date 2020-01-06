import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getRandomQuestion(): Observable<Question>{
    return this.http.get<Question>('http://jservice.io/api/random');
  }
}
