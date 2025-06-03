import { Component, effect, inject } from '@angular/core';
import { ListComponent } from "../../components/users-list/list.component";
import { CommonModule } from '@angular/common';
import { UsersFacade } from '../../store/users.facade';
import { UserDetailComponent } from "../../components/user-detail/user-detail.component";

@Component({
    selector: 'app-users-list-page',
    imports: [ListComponent, CommonModule, UserDetailComponent],
    templateUrl: './users-list-page.component.html',
    styleUrl: './users-list-page.component.scss'
})
export class UsersListPageComponent {
    private facade = inject(UsersFacade);
    
    constructor() {
        effect(() => this.facade.loadUsers())
    }
}
