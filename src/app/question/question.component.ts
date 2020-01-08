import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations:[
    trigger('myanimation',[
      state('small', style({height:'0px'})),
      state('large', style({height:'30px'})),
      transition('small <=> large', animate('400ms ease-in'))
    ])
  ]
})
export class QuestionComponent implements OnInit {
  question: Question;
  inputAnswer: string = ""
  state:string = 'small';
  icon:string;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.setNextQuestion();
  }

  changeState(){
    this.state= (this.state==='small' ? 'large':'small');
  }

  closeAnswer(){
    this.state= 'small'
    return new Promise(resolve => setTimeout(resolve, 400));
  }

  checkAnswer(){
    if(this.setStringToCheck(this.inputAnswer)===this.setStringToCheck(this.question.answer)){
      this.icon='pipe';
    }else{
      this.icon='cross'
    }
  }
  setStringToCheck(answer:string){
    return answer.trim().toLocaleLowerCase().replace(/\s/g, '');
  }


  async setNextQuestion(){
    await this.closeAnswer()
    this.questionService.getRandomQuestion().subscribe(question=>{
      this.question=question[0];
    });
  }

}
