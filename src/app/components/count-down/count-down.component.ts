import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { MethodsService } from '../../methods.service';
import { Colors } from '../../colors'

@Component({
  selector: 'count-down-component',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})

export class CountDownComponent implements OnInit {
  constructor(private methodsService: MethodsService) { }
  randomNumber: number = 0;
  counter: number = 60;
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

  ngOnInit(): void {
    //Cargo mi variable local con lo que hay en el localStorage
    const localStorageObj = this.methodsService.readLocalStorage('colors');
    if(localStorageObj) {
      const localStorageObj = <Colors>JSON.parse(this.methodsService.readLocalStorage('colors') || "") 
      this.myColors = localStorageObj;
    }
    //Genero el número aleatorio
    this.randomNumber = this.methodsService.createRandomNumber(0,60);
    this.startTimer();
  }

  simulateOtherUsersClick = () => {
    //Obtengo el color
    let color:string = this.methodsService.colorPreset(this.randomNumber);
    
    //Leo del localStorage y transformo al tipo Colors
    const localStorageObj = <Colors>JSON.parse(this.methodsService.readLocalStorage('colors') || "") 
    this.myColors = localStorageObj;
    this.myColors[color as keyof Colors]++;

    //Guardo en localStorage
    this.methodsService.writeLocalStorage('colors',  this.myColors);
    
    //Reseteo el contador
    this.counter = 60
    
    //Seteo un nuevo numero aleatorio para simular otro click
    this.randomNumber = this.methodsService.createRandomNumber(0,60);
  }

  handleClick = () => {
    //Obtengo el color
    let color:string = this.methodsService.colorPreset(this.counter);

    //Guardo en localStorage
    const localStorageObj = <Colors>JSON.parse(this.methodsService.readLocalStorage('colors') || "") 
    this.myColors = localStorageObj;
    this.myColors[color as keyof Colors]++;

    //Colocamos en 1 el color white, que significa que ya no estamos habilitados a hacer click
    this.myColors.white = 1;
    this.myColors.myColor = color;
    this.methodsService.writeLocalStorage('colors',  this.myColors);

    //Reseteo el contador
    this.counter = 60
  };
  
  //Timer
  startTimer = () =>{
    timer(0, 1000).subscribe(n => {
      this.counter--;
      if(this.counter === this.randomNumber) {
        this.simulateOtherUsersClick();
      }
    });
  };

  isInvalid = () => this.myColors.myColor !== "";
}
