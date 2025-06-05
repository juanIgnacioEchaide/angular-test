import { Component, Input } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-detail',
  imports: [ListItemComponent, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  @Input() userId = 0;
  @Input() index = 0;
  @Input() userName = '';
}
