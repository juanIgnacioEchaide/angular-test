import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  @Input() userId: number = 0;
  @Input() index: number = 0;
  @Input() userName: string = '';
}
