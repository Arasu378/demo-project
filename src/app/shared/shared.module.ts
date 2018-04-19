import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from '../routing/routing.module';
import {FacadeService} from '../api-service/facade.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    FacadeService
  ]
})
export class SharedModule { }
