import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {
  protected readonly features = [
    {
      icon: 'fa-regular fa-comment-dots',
      title: 'Real conversations',
      text: 'Replies stay in one clear thread.',
    },
    {
      icon: 'fa-solid fa-user-group',
      title: 'Your communities',
      text: 'Follow friends and join what you love.',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Calm by design',
      text: 'Moderated around the clock.',
    },
  ];

  protected readonly stats = [
    { value: '120K+', label: 'Members' },
    { value: '30+', label: 'Communities' },
    { value: '2021', label: 'Founded' },
  ];
}
