import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ChartsComponent} from './charts.component';
import {ChartService} from './chart.service';
import {FusionChartsModule} from 'angular4-fusioncharts';
import {NvD3Module} from 'ng2-nvd3';

@NgModule({
  imports: [
    SharedModule,
    NvD3Module
  ],
  declarations: [
    ChartsComponent
  ],
  exports: [
    SharedModule,
    ChartsComponent,
    NvD3Module
  ],
  providers: [
    ChartService
  ]
})
export class ChartsModule { }
