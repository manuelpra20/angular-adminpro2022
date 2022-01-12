import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {


  @Input() title: string = 'sin titulo';

   @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label2'];
   @Input('data') doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [ 350, 450, 100 ] }
     ]
   };


}
 