import { Injectable } from '@angular/core';
import { ColorsModel } from 'src/app/Model/colors.model';
import { DataLayerService } from '../data/data-layer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private dataLayerService: DataLayerService) { }

  //Local storage
  readLocalStorage(item:string = ""){
    return this.dataLayerService.readLocalStorage(item);
  };

  //escribir localStorage
  writeLocalStorage(item:string, object:ColorsModel):void{
    this.dataLayerService.writeLocalStorage(item, object);
  };
}
