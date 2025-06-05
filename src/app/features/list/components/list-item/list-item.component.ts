import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  index = input(0);
  title = input('');
  firstLabel = input('');
  firstValue = input<string | number>('');
  secondLabel = input('');
  secondValue = input<string | number>('');
  borderColor = input('#007acc');
}
