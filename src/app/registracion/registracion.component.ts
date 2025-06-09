import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracion',
  standalone: false,
  templateUrl: './registracion.component.html',
  styleUrl: './registracion.component.css'
})
export class RegistracionComponent {
  signupForm: FormGroup;
  signupError = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get name() { return this.signupForm.get('name')!; }
  get email() { return this.signupForm.get('email')!; }
  get password() { return this.signupForm.get('password')!; }

  onSubmit() {
    if (this.signupForm.valid) {
      const { name, email, password } = this.signupForm.value;
      console.log('User created:', name, email, password);
      // Simული redirect
      this.router.navigate(['/login']);
    } else {
      this.signupError = 'Please fix the errors and try again.';
    }
  }
}