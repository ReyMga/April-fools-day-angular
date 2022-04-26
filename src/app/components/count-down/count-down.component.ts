import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { AuthService } from '../../services/abstractions/auth.service';
import { Colors } from '../../colors';
import Utils from '../../utils';
import {ColorsModel} from "../../Model/colors.model";

@Component({
  selector: 'count-down-component',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  @Output() refreshParentChart = new EventEmitter();

  myColors: ColorsModel;
  randomNumber: number = 0;
  counter: number = 60;

  constructor(private authService: AuthService) {
    this.myColors = new ColorsModel();
  }

  callParent(): void {
    this.refreshParentChart.emit();
  }

  ngOnInit(): void {
    //Cargo mi variable local con lo que hay en el localStorage
    const localStorageObj = this.authService.readLocalStorage('colors');
    if (localStorageObj) {
      const localStorageObj = <Colors>(
        JSON.parse(this.authService.readLocalStorage('colors') || '')
      );
      this.myColors = localStorageObj;
    }
    //Genero el número aleatorio
    this.randomNumber = Utils.createRandomNumber(0, 60);
    this.startTimer();
  }

  simulateOtherUsersClick() {
    //Obtengo el color
    let color = Utils.colorPreset(this.randomNumber);

    //Leo del localStorage y transformo al tipo Colors
    const localStorageObj = <Colors>(
      JSON.parse(this.authService.readLocalStorage('colors') || '')
    );
    this.myColors = localStorageObj;
    this.myColors[color as keyof Colors]++;

    //Guardo en localStorage
    this.authService.writeLocalStorage('colors', this.myColors);

    //Reseteo el contador
    this.counter = 60;

    //Seteo un nuevo numero aleatorio para simular otro click
    this.randomNumber = Utils.createRandomNumber(0, 60);
    this.callParent();
  }

  handleClick() {
    //Obtengo el color
    let color = Utils.colorPreset(this.counter);

    //Guardo en localStorage
    const localStorageObj = <Colors>(
      JSON.parse(this.authService.readLocalStorage('colors') || '')
    );
    this.myColors = localStorageObj;
    this.myColors[color as keyof Colors]++;

    //Colocamos en 1 el color white, que significa que ya no estamos habilitados a hacer click
    this.myColors.white = 1;
    this.myColors.myColor = color;
    this.authService.writeLocalStorage('colors', this.myColors);

    //Reseteo el contador
    this.counter = 60;
    this.callParent();
  }

  //Timer
  startTimer() {
    timer(0, 1000).subscribe((n) => {
      this.counter--;
      if (this.counter === this.randomNumber) {
        this.simulateOtherUsersClick();
      }
    });
  }

  isInvalid = () => this.myColors.myColor !== '';
}
