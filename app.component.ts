import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { ChartServicee } from './services/chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private chartServicee: ChartServicee) {}

  title = 'teste-front-ng7';

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' }
  ];

  ngOnInit() {
  	this.chartServicee.getDataFunc()
  		.subscribe(response => {
  			console.log(response)
  		})
  }
}
