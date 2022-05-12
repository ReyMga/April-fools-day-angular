import { Injectable } from '@angular/core';
import { ColorsModel } from 'src/app/Model/colors.model';
import { UserModel } from 'src/app/Model/userModel';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class DataLayerService {

  constructor( private toastr: ToastrService) { }

  //Local storage
  readLocalStorage(item: string = '') {
    return localStorage.getItem(item);
  }
  //write localStorage
  writeLocalStorage(item: string, object: ColorsModel) {
    localStorage.setItem(item, JSON.stringify(object));
  }

  registerUser(user: UserModel) {
    //1. Read from LS into local var
    const users = this.readUsers();
    //Validation userName
    if(!!users.find((x) => x.userName === user.userName)){
      this.toastr.error('UserName already exists.', 'Registration failed.');
      return false; 
    }
    //2. Add item to var local
    users.push(user);
    //3. Write to LS
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  readUsers() {
    return <UserModel[]>JSON.parse(this.readLocalStorage('users') || '[]');
  }
  
  readCurrentUser() {
    return <UserModel>JSON.parse(this.readLocalStorage('currentUser') || '[]');
  }

  login(user: UserModel) {
    if(this.existUserInUsers(user)){
      //Save in localStorage current user
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
