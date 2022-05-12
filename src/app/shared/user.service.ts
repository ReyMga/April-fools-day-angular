import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from '../Model/userModel';
import { DataLayerService } from '../services/data/data-layer.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private dataLayerService: DataLayerService) {}

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (
      confirmPswrdCtrl?.errors == null ||
      'passwordMismatch' in confirmPswrdCtrl.errors
    ) {
      if (fb.get('Password')?.value != confirmPswrdCtrl?.value)
        confirmPswrdCtrl?.setErrors({ passwordMismatch: true });
      else confirmPswrdCtrl?.setErrors(null);
    }
  }

  login(formData: any) {
    return this.dataLayerService.login(<UserModel>formData.value);
  }

  register(formData: any) {
    return this.dataLayerService.registerUser(<UserModel>formData.value);
  }
}
