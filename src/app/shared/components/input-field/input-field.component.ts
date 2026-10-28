import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  //! the <app-input-field> tag itself is inline by default, so make it a block for spacing
  host: { class: 'block' },
})
export class InputFieldComponent {
  //! input.required() => the parent MUST pass it, input() => optional with a default value
  control = input.required<FormControl>();
  //! named inputId / inputType (not id / type): a plain id="..." or type="..." on <app-input-field>
  //! also lands on the host tag as a real HTML attribute, so global [type='email'] styles and
  //! duplicate ids would hit the wrapper too
  inputId = input.required<string>();
  label = input.required<string>();
  icon = input.required<string>();
  inputType = input('text');
  //! { validatorKey: message } — order matters, the first matching error is shown
  errorMessages = input<Record<string, string>>({});

  get errorMessage(): string | null {
    const errors = this.control().errors;
    if (!errors) return null;
    const key = Object.keys(this.errorMessages()).find((k) => k in errors);
    return key ? this.errorMessages()[key] : null;
  }
}
