import { Injectable } from '@angular/core';
import {HandleError} from '../cache/http-error-handler.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChartService {
  private handleError: HandleError;
  private data;
  private pieData;
  constructor(private httpClient: HttpClient) { }
  dailyForeCast() {
    // return this.httpClient.get('http://samples.openweathermap.org/' +
    //   'data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22');
    return  this.data = [
      {
        key: 'Cumulative Return',
        values: [
          {
            'label' : 'A' ,
            'value' : -29.765957771107
          } ,
          {
            'label' : 'B' ,
            'value' : 0
          } ,
          {
            'label' : 'C' ,
            'value' : 32.807804682612
          } ,
          {
            'label' : 'D' ,
            'value' : 196.45946739256
          } ,
          {
            'label' : 'E' ,
            'value' : 0.19434030906893
          } ,
          {
            'label' : 'F' ,
            'value' : -98.079782601442
          } ,
          {
            'label' : 'G' ,
            'value' : -13.925743130903
          } ,
          {
            'label' : 'H' ,
            'value' : -5.1387322875705
          }
        ]
      }
    ];
  }
  pieData() {
    return this.pieData = [
      {
        key: 'One',
        y: 5
      },
      {
        key: 'Two',
        y: 2
      },
      {
        key: 'Three',
        y: 9
      },
      {
        key: 'Four',
        y: 7
      },
      {
        key: 'Five',
        y: 4
      },
      {
        key: 'Six',
        y: 3
      },
      {
        key: 'Seven',
        y: .5
      }
    ];
  }
}
