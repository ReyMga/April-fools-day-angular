import { Injectable } from '@angular/core';
import { ColorsModel } from 'src/app/Model/colors.model';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  constructor() {}

  //Local storage
  readLocalStorage(item:string = ""){
    return localStorage.getItem(item);
  };
  //escribir localStorage
  writeLocalStorage(item:string, object:ColorsModel){
    localStorage.setItem(item, JSON.stringify(object));
  };
}
