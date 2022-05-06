import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoBarrasComponent } from './components/grafico-barras/grafico-barras.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { PrincipalPageComponent } from './pages/principal-page.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent} from './pages/login/login.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    GraficoBarrasComponent,
    CountDownComponent,
    PrincipalPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,    
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
