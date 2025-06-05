import { Component, input } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-machine-detail',
  imports: [ListItemComponent, CommonModule],
  templateUrl: './machine-detail.component.html',
})
export class MachineDetailComponent {
  idx = input<number>(0);
  machineId = input<number | string>(0)
  machineModel = input<string>('')
}
