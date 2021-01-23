import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [
  ]
})
export class IncreaserComponent implements OnInit{

  ngOnInit() {
    this.btnClassName = `btn ${this.btnClassName}`;
  } 

  @Input('valueProgress') numberProgress: number = 50;
  @Input() btnClassName: string = 'btn-primary';

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  changePercetenge( value: number ) {

    if( this.numberProgress >= 100 && value >= 0 ) {
      this.outputValue.emit(100);
      return this.numberProgress = 100;
    } else if( this.numberProgress <= 0 && value < 0) {
      this.outputValue.emit(0);
      return this.numberProgress = 0;
    }
    this.numberProgress = this.numberProgress + value;
    this.outputValue.emit(this.numberProgress);
  }

  onChange( newValue: number ) {
    if( newValue >= 100 ) {
      this.numberProgress = 100;
    } else if( newValue <= 0 ) {
      this.numberProgress = 0;
    } else {
      this.numberProgress = newValue
    }

    this.outputValue.emit(this.numberProgress);
  }

}
