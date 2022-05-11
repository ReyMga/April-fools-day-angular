import { FormGroup, FormControl, FormControlName } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})

export class RegistrationComponent implements OnInit {
  submitted: boolean = false;

  userName: string = '';
  fullName: string = '';
  password: string = '';
  confirmPassword: string = '';

  
  registerForm = new FormGroup({
    userName: new FormControl(''),
    fullName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })

  constructor(public service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm.reset();
  }

  validateForm(){
    const formValue = this.registerForm.value;
    return formValue.userName.length > 0 && 
    formValue.fullName.length > 0 && 
    formValue.password.length > 0 && 
    formValue.confirmPassword.length > 0 &&   
    formValue.confirmPassword === formValue.password
  }

  onSubmit() {
    debugger;
    this.submitted = true;
    if(!this.validateForm())
      return;
    this.service.register(this.registerForm)
    
    this.toastr.success('User created successfully', 'Successfull Registration .');  
    this.router.navigateByUrl('/login');
  }
}
