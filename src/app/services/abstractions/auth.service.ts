import { Injectable } from '@angular/core';
import { ColorsModel } from 'src/app/Model/colors.model';
import { DataLayerService } from '../data/data-layer.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private dataLayerService: DataLayerService, private router: Router) { }

  //Local storage
  readLocalStorage(item:string = ""){
    return this.dataLayerService.readLocalStorage(item);
  };

  //escribir localStorage
  writeLocalStorage(item:string, object:ColorsModel):void{
    this.dataLayerService.writeLocalStorage(item, object);
  };

  logout():void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  readUsers() {
    return this.dataLayerService.readUsers();
  }

  readCurrentUser() {
    return this.dataLayerService.readCurrentUser();
  }
}
