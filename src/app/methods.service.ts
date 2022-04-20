import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor() { }

  //número aleatorio
  createRandomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  //Local storage
  readLocalStorage = (item:string = "")  => {
    return localStorage.getItem(item);
  };
  //escribir localStorage
  writeLocalStorage = (item:string, object:object) => {
    localStorage.setItem(item, JSON.stringify(object));
  };

  //colors
  colorPreset = (seconds:number) => {
    let result;
    switch (true) {
      case (seconds > 51):
        result = "purple";
      break;
      case (seconds >= 42 && seconds <= 51  ):
        result = "blue";
      break;
      case (seconds >= 32 && seconds <= 41  ):
        result = "green";
      break;
      case (seconds >= 22 && seconds <= 31  ):
        result = "yellow";
      break;
      case (seconds >= 12 && seconds <= 21  ):
        result = "orange";
      break;
      case (seconds >= 0 && seconds <= 11  ):
        result = "red";
      break;
      default:
        result = "grey";
      break;
    }
    return result;
  };

   formatData = (colors:object) => {
    //Formateo las propiedades del array en un nuevo array que sea compatible con el Chart.js
    const formatedData = Object.entries(colors).map(
      x => x[0] !== "myColor" && { name: x[0], value: x[1] }
    );
    //Remuevo el ultimo item del array que es myColor y al grafico no le sirve
    formatedData.pop();
  
    return formatedData;
  };

}
