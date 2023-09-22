import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, this.validEmail.bind(this)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
    })
    this.errorMessage
  };
  

  get lastName() {
    return this.loginForm.get('lastName');
  }
  get firstName() {
    return this.loginForm.get('firstName');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }


  validEmail(email: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  }


  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Votre nom n\'est pas valide'; 
      console.log('Pas valide :',this.errorMessage)
    } else {
      this.errorMessage = 'Votre nom est valide'; 
      console.log('Valid : ',this.errorMessage)
    }
    console.log(this.loginForm.value)
  }
  
}
