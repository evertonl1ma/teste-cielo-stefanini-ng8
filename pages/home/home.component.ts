import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { ApiService } from '../../services/api.service';
import { Lancamento } from '../../models/lancamentos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  public lancamento: any;

  public showLoader: boolean = true;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2016'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Quantidade de lançamento' },
    { data: [], label: 'Quantidade de remessas' }
  ];

  ngOnInit() {
  	this.init()
  }


  init() {
  		this.apiService.getDataFunc()
  		.subscribe(response => {
  			this.lancamento = response;
  			this.barChartData[0].data.push(this.lancamento.totalControleLancamento.quantidadeLancamentos)
  			this.barChartData[1].data.push(this.lancamento.totalControleLancamento.quantidadeRemessas)
  			this.showLoader = false;
  		})
  }
}
