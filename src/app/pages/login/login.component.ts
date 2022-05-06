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

    /*this.service.login(this.loginForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
    */
  }

}
