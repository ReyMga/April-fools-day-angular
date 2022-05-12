import { Injectable } from '@angular/core';
import { ColorsModel } from 'src/app/Model/colors.model';
import { UserModel } from 'src/app/Model/userModel';

@Injectable({
  providedIn: 'root',
})
export class DataLayerService {
  constructor() {}

  //Local storage
  readLocalStorage(item: string = '') {
    return localStorage.getItem(item);
  }
  //escribir localStorage
  writeLocalStorage(item: string, object: ColorsModel) {
    localStorage.setItem(item, JSON.stringify(object));
  }

  registerUser(user: UserModel) {
    debugger
    //1. Read from LS into local var
    const users = this.readUsers();
    //2. Add item to var local
    users.push(user);
    //3. Write to LS
    localStorage.setItem('users', JSON.stringify(users));
  }

  readUsers() {
    return <UserModel[]>JSON.parse(this.readLocalStorage('users') || '[]');
  }
  
  readCurrentUser() {
    return <UserModel>JSON.parse(this.readLocalStorage('currentUser') || '[]');
  }

  login(user: UserModel) {
    if(this.existUserInUsers(user)){
      //Guardo en localStorage el usuario actual
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  existUserInUsers(user: UserModel){
    const users = this.readUsers();
    return !!users.find((x) => x.userName === user.userName && x.password=== user.password);
  }
  
}
