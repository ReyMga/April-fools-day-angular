import { Component, OnInit } from '@angular/core';
import { MethodsService } from './methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private methodsService: MethodsService) { }

  title = 'april-fools-angular';
  tiempoAleatorio: number = 0;

  ngOnInit(): void {
    this.tiempoAleatorio = this.methodsService.createRandomNumber(1,100);
  }

  onClick(): void {
    this.tiempoAleatorio = this.methodsService.createRandomNumber(1,100);
  }
}
