import { Question } from './../questionModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import data from '../data.json';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  name: string = 'User';
  quizData: any = data;
  showTotalScore: boolean = false;
  totalScore: number = 0;
  correctAnswerCount: number = 0;
  correctAnswer = [];
  correctAnswerList = [];
  submittedForm: boolean = false;
  userSubmittedAnswers = [];
  passClass = 'is-correct';
  failClass = 'is-wrong';
  applyPassFailClass = [];
  ngOnInit(): void {
    setTimeout(() => {
      this.name = localStorage.getItem('UserName');
    }, 3000);

    for (var i = 0; i < this.quizData.length; i++) {
      this.correctAnswerList.push(this.quizData[i].correct);
    }
    this.correctAnswerCount = 0;
    this.submittedForm = false;
    this.showTotalScore = false;
  }
  Quest1 = new Question(1);
  Quest2 = new Question(2);
  Quest3 = new Question(3);
  Quest4 = new Question(4);
  Quest5 = new Question(5);
  Quest: any[] = [
    this.Quest1,
    this.Quest2,
    this.Quest3,
    this.Quest4,
    this.Quest4,
    this.Quest5,
  ];

  onSubmit(submitForm: any) {
    this.applyPassFailClass.length = this.quizData.length;
    this.showTotalScore = true;
    this.userSubmittedAnswers[0] = submitForm.value.Question1;
    this.userSubmittedAnswers[1] = submitForm.value.Question2;
    this.userSubmittedAnswers[2] = submitForm.value.Question3;
    this.userSubmittedAnswers[3] = submitForm.value.Question4;
    this.userSubmittedAnswers[4] = submitForm.value.Question5;
    for (var j = 0; j < this.correctAnswerList.length; j++) {
      if (this.userSubmittedAnswers[j] == undefined) {
        this.applyPassFailClass[j] = false;
        break;
      } else if (this.userSubmittedAnswers[j] === this.correctAnswerList[j]) {
        this.applyPassFailClass[j] = true;
        this.correctAnswerCount++;
      } else {
        this.applyPassFailClass[j] = false;
      }
    }
    this.totalScore = this.correctAnswerCount;

    for (var k = 0; k < this.applyPassFailClass.length; k++) {
      if (
        this.applyPassFailClass[k] !== true &&
        this.applyPassFailClass[k] !== false
      ) {
        alert('Please answer all the questions');
        this.submittedForm = false;
        this.showTotalScore = false;
        break;
      } else {
        this.submittedForm = true;
        this.showTotalScore = true;
      }
    }
  }
}
