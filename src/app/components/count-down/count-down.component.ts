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
  seconds: number = 60;
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
    this.randomNumber = this.methodsService.createRandomNumber(0,60);
    this.startTimer();
  }

  onClick(): void {
    this.randomNumber = this.methodsService.createRandomNumber(0,60);
  }

  colors = {
    purple: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    orange: 0,
    red: 0,
    grey: 0,
    white: 0,
    myColor: null
  };

  simulateOtherUsersClick = () => {
    //Obtengo el color
    let color:string = this.methodsService.colorPreset(this.randomNumber);
    
    //Guardo en localStorage
    const localStorageObj = this.methodsService.readLocalStorage('colors');
    /*
    let personFromStorage = JSON.parse(localStorage.getItem('colors')) as Colors;

    const dale= JSON.parse(localStorageObj)

    this.colores = <Colors>localStorageObj;
    this.colores = JSON.parse(Colors, this.colores)
    */
    this.colores[color as keyof Colors]++;

    this.methodsService.writeLocalStorage('colors',  this.colores);
    
    //Reseteo el contador
    this.counter = 60
    
    //Seteo un nuevo numero aleatorio para simular otro click
    this.randomNumber = this.methodsService.createRandomNumber(0,60);
  }

  //Timer
  startTimer = () =>{
    timer(0, 1000).subscribe(n => {
      this.counter--;
      console.log(this.randomNumber)
      console.log(this.counter)
      if(this.counter === this.randomNumber) {
        this.simulateOtherUsersClick();
      }
    });
  };

  // handleClick = () => {
  //   //Obtengo el color
  //   let color = colorPreset(counter);

  //   //Guardo en localStorage
  //   const colorsObj = readLocalStorage('colors');
  //   colorsObj[color] += 1;
  //   //Colocamos en 1 el color white, que significa que ya no estamos habilitados a hacer click
  //   colorsObj.white = 1;
  //   colorsObj.myColor = color;
  //   writeLocalStorage('colors',  colorsObj);

  //   //Actualizo mi variable de estado local
  //   setColors(colorsObj);

  //   //Reseteo el contador
  //   setCounter(seconds); //Reseteo el contador

  //   props.onUpdate();
  // };

  // const simulateOtherUsersClick = () => {
  //   //Obtengo el color
  //   let color = colorPreset(randomNumber);
    
  //   //Guardo en localStorage
  //   const colorsObj = readLocalStorage('colors');
  //   colorsObj[color] += 1;
  //   writeLocalStorage('colors',  colorsObj);

  //   //Actualizo mi variable de estado local
  //   setColors(colorsObj);

  //   //Reseteo el contador
  //   setCounter(seconds); //Reseteo el contador
  //   setRandomNumber(createRandomNumber(0, seconds)); //Seteo un nuevo numero aleatorio para simular otro click

  //   props.onUpdate();
  // }

}
