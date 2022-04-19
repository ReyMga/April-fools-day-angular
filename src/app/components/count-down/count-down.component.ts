import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
