import { Component, input, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId = input<number>(0)
  index = input<number>(0)
  userName = input<string>('')
}
