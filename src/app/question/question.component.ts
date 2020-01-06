import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Question;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getRandomQuestion().subscribe(question=>{
      this.question=question[0];
    });
  }

}
