import { Component } from '@angular/core';
import { MachineDetailComponent } from "../../components/machine-detail/machine-detail.component";
import { ListComponent } from "../../components/users-list/list.component";

@Component({
  selector: 'app-machines-list-page',
  imports: [MachineDetailComponent, ListComponent],
  templateUrl: './machines-list-page.component.html',
  styleUrl: './machines-list-page.component.scss'
})
export class MachinesListPageComponent {
  
}
