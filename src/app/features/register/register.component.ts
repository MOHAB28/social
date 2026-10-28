import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../shared/components/input-field/input-field.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputFieldComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      //! Validators.max & Validators.min for numbers
      //! Validators.maxLength & Validators.minLength for chars
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      userName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/),
      ]),
      rePassword: new FormControl('', [Validators.required]),
    },
    // { updateOn: 'submit' },
  );

  register(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
    // console.log(this.registerForm.getRawValue());
  }
}
