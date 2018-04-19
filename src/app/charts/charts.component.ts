import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ChartService} from './chart.service';
import 'd3';
import 'nvd3';
declare let d3: any;
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css',
    '../../../node_modules/nvd3/build/nv.d3.css'],
  encapsulation: ViewEncapsulation.None

  // '../../node_modules/nvd3/build/nv.d3.css'
})
export class ChartsComponent implements OnInit {
  options;
  data;
  pie;
  piedata;
  constructor(private weather: ChartService) {  }

  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        width: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d) {return d.label; },
        y: function(d) {return d.value; },
        showValues: true,
        valueFormat: function(d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    };
    this.pie = {
      chart: {
        type: 'pieChart',
        height: 400,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
         return  d.y;
        },
        showLables: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
  this.data = this.weather.dailyForeCast();
  this.piedata =  this.weather.pieData();
  }

}
