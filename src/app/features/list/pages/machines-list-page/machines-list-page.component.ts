import { Component } from '@angular/core';
import { MachineDetailComponent } from "../../components/machine-detail/machine-detail.component";
import { MachinesListComponent } from "../../components/machines-list/machines-list.component";

@Component({
  selector: 'app-machines-list-page',
  imports: [MachineDetailComponent, MachinesListComponent],
  templateUrl: './machines-list-page.component.html',
  styleUrl: './machines-list-page.component.scss'
})
export class MachinesListPageComponent {
  
}
