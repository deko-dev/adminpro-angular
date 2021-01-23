import { Component } from '@angular/core';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-grafic1',
  templateUrl: './grafic1.component.html',
  styles: [
  ]
})
export class Grafic1Component {

  salesForMonth: string[] = ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  cantSalesForMonth: Array<number> = [350, 450, 100, 323, 123, 500];
  colorsGrafic: Array<string> = ['#6857E6', '#009FEE', '#f02059', '#57E668', '#D9DA74', '#DA8774'];
  
}
