import { Component, OnInit } from '@angular/core';
import { Colors } from './colors'
import { MethodsService } from './methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  constructor(private methodsService: MethodsService) { }
  title = 'april-fools-angular';
  colores: Colors = {
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

  ngOnInit(): void {
    const localStorageObj = this.methodsService.readLocalStorage('colors');
    if(!localStorageObj) {
      this.methodsService.writeLocalStorage('colors',  this.colores);
    }else{
      //setColors(localStorageObj) 
    }
  }
}
