import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {
  protected readonly stats = [
    { value: '2021', label: 'Founded' },
    { value: '120K+', label: 'Members' },
    { value: '30+', label: 'Communities' },
    { value: '8', label: 'Countries' },
    { value: '24/7', label: 'Moderation' },
  ];
}
