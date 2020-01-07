import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-category-question',
  templateUrl: './category-question.component.html',
  styleUrls: ['./category-question.component.css'],
  animations:[
    trigger('myanimation',[
      state('small', style({height:'0px'})),
      state('large', style({height:'30px'})),

      transition('small <=> large', animate('400ms ease-in'))

    ])

  ]
})
export class CategoryQuestionComponent implements OnInit {
  categoryId: number;
  questions: Question[];
  actualQuestion: Question;
  actualIndex:number;
  isWarning:boolean = false;
  state:string = 'small';

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }

  changeState(){
    this.state= (this.state==='small' ? 'large':'small');
  }

  closeAnswer(){
    this.state= 'small'
    return new Promise(resolve => setTimeout(resolve, 400));
  }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.getQuestions();
    this.actualIndex=0;
  }


  getQuestions(){
    this.questionService.getQuestionsByCategory(this.categoryId).subscribe(questions=>{
      this.questions=questions;
      this.actualQuestion=questions[0];
    })
  }

  async setNextQuestion(){
    await this.closeAnswer();
    if(this.actualIndex!==this.questions.length-1){
      this.actualIndex+=1;
      this.actualQuestion=this.questions[this.actualIndex];
      
    }else{
      this.isWarning=true;
    }
  }

}
