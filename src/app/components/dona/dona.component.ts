import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Not Title';
  @Input('labels') doughnutChartLabels: Label[] | Array<string> = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [[350, 240, 120]];
  @Input('colors') arrColors: Array<string> = ['#6857E6', '#009FEE', '#f02059'];

  

}
