import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-list',
    imports: [CommonModule],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() items: any[] = [];
  @Input() itemTemplate!: TemplateRef<any>;
}
