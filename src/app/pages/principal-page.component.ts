import { Component, OnInit } from '@angular/core';
import { Colors } from '../colors'
import { AuthService } from '../services/abstractions/auth.service';
import {GraficoModel} from "../Model/grafico.model";
import {ColorsModel} from "../Model/colors.model";
import Utils from '../utils'
import { UserModel } from 'src/app/Model/userModel';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {
  title = 'april-fools-angular';
  myColors: ColorsModel;
  colors: Array<GraficoModel> = [];
  currentUserName = '';

  constructor(private authService: AuthService) { 
    this.myColors = new ColorsModel()
  }

  ngOnInit(): void {
    const localStorageObj = this.authService.readLocalStorage('colors');
    if(!localStorageObj) {
      this.authService.writeLocalStorage('colors',  this.myColors);
    }else{
      this.renderChart();
    }
   const currentUser: UserModel = this.authService.readCurrentUser();
   console.log(currentUser);
   this.currentUserName = currentUser.userName;
  }

  logout():void {
    this.authService.logout();
  }

  refreshChart():void {
    this.renderChart();
  }

  renderChart():void{
    const localStorageObj = <Colors>JSON.parse(this.authService.readLocalStorage('colors') || "") 
    this.myColors = localStorageObj;
    this.colors = <GraficoModel[]> Utils.formatData(this.myColors)
  }

}
