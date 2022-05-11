import { FormGroup, FormControl, FormControlName } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  name: string = '';
  submitted = false;

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  goToRegister(){  
    console.log('Registering')
    this.router.navigateByUrl('/register');
  }

  loginUser() {
    //console.log(this.loginForm)


    if(this.service.login(this.loginForm.value)){
        localStorage.setItem('token', '123');
        this.submitted = true;
        this.router.navigateByUrl('/home');
    }else{
      this.router.navigateByUrl('/login');
      this.toastr.error('Incorrect username or password.', 'Authentication failed.');
      this.submitted = false;
    }

  }

}
