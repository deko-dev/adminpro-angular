import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

    numberProgressOne: number = 50;
    numberProgressTwo: number = 25;

    get getPercentegeOne() {
      return `${ this.numberProgressOne }%`
    }

    get getPercentegeTwo() {
      return `${ this.numberProgressTwo }%`
    }

    changeValueChild( value: number ) {
      console.log('Heyyy!!!!', value);
    }
}