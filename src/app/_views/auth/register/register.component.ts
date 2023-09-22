import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})

export class RegisterComponent {
  hide = true;
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      lastName: ['', Validators.required, Validators.minLength(4)],
      firstName: ['', Validators.required, Validators.minLength(4)],
      email: ['', Validators.required, this.validEmail],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(4)],
      confirmPassword: ['', Validators.required , Validators.minLength(4)],
    })
  };
  get lasttName() {
    return this.registerForm.get('lastName');
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }


  validEmail(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }

  onSubmit(): void {
    
    if (this.registerForm.invalid) {
      this.errorMessage = 'Votre nom n\'est pas valide'; 
      console.log('Pas valide :',this.errorMessage)
    } else {
      this.errorMessage = 'Votre nom est valide'; 
      console.log('Valid : ',this.errorMessage)
    }
    console.log(this.registerForm.value)
  }


}
