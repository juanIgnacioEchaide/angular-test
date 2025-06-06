import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, signal, ChangeDetectionStrategy } from '@angular/core';
import { UserSkeletonComponent } from '../user-skeleton/user-skeleton.component';

@Component({
  selector: 'app-machines-list',
  standalone: true,
  imports: [CommonModule, UserSkeletonComponent],
  templateUrl: './machines-list.component.html',
  styleUrl: './machines-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachinesListComponent {
  @Input() itemTemplate!: TemplateRef<any>;

  machines = signal([
    { id: 1, model: 'Dell OptiPlex 7090' },
    { id: 2, model: 'HP EliteDesk 800 G6' },
    { id: 3, model: 'Lenovo ThinkCentre M90t' }
  ]);
}
