import { Component, OnInit } from '@angular/core';
import { Colors } from './colors'
import { MethodsService } from './methods.service';
import {GraficoModel} from "./Model/grafico.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  constructor(private methodsService: MethodsService) { }
  title = 'april-fools-angular';
  myColors: Colors = {
    purple: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    orange: 0,
    red: 0,
    grey: 0,
    white: 0,
    myColor: '',
  };
  
  colors: Array<GraficoModel> = [];

  ngOnInit(): void {
    const localStorageObj = this.methodsService.readLocalStorage('colors');
    if(!localStorageObj) {
      this.methodsService.writeLocalStorage('colors',  this.myColors);
    }else{
      this.renderChart();
    }
  }

  refreshChart():void {
    this.renderChart();
  }

  renderChart():void{
    const localStorageObj = <Colors>JSON.parse(this.methodsService.readLocalStorage('colors') || "") 
    this.myColors = localStorageObj;
    this.colors = <GraficoModel[]> this.methodsService.formatData(this.myColors)
  }
}
