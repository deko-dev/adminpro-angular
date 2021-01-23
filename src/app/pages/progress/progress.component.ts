import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

    numberProgress: number = 50;

    get getPercentege() {
      return `${ this.numberProgress }%`
    }

    changePercetenge( value: number ) {

      if( this.numberProgress >= 100 && value >= 0 ) {
        return this.numberProgress = 100;
      } else if( this.numberProgress <= 0 && value < 0) {
        return this.numberProgress = 0;
      }
      this.numberProgress = this.numberProgress + value;
    }

}