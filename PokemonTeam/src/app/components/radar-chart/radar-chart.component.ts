import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/app/interface/pokemon';
import { Chart, registerables } from 'chart.js'
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  @Input() stats?: Stat[];
  public chart: any;


  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.getLabels();
    this.drawChart();
  }

  drawChart() {
    const labels = this.getLabels();
    const stats = this.getStats();
    this.chart = new Chart("MyChart", {
      type: 'radar', //this denotes tha type of chart

      data: {
        labels: labels,
        datasets: [{
          data: stats,
          fill: true,
          label: 'Stats',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  getLabels(): string[] {
    return this.stats!.map((stat) => { return stat.stat.name });
  }
  getStats(): number[] {
    return this.stats!.map((stat) => { return stat.base_stat });
  }

}
