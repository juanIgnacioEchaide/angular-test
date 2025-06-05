import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Machine } from '../../models/machine.model';
import { MachineDetailComponent } from "../machine-detail/machine-detail.component";


@Component({
  selector: 'app-machines-list',
  standalone: true,
  imports: [CommonModule, MachineDetailComponent],
  templateUrl: './machines-list.component.html',
  styleUrl: './machines-list.component.scss',
})
export class MachinesListComponent {
  machines: Machine[] = [
    { id: 1, model: 'Dell OptiPlex 7090' },
    { id: 2, model: 'HP EliteDesk 800 G6' },
    { id: 3, model: 'Lenovo ThinkCentre M90t' }
  ];

  @ViewChild('itemTemplate', { static: true }) itemTemplate!: TemplateRef<any>;
}
