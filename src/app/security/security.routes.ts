import { RouterModule , Routes } from '@angular/router';
import { PageComponent } from '../components/page/page.component';
import { UserComponent } from './components/users/user.component';
import { ListUsersComponent } from './components/users/list-users.component';
import { ListRolesComponent } from './components/roles/list-roles.component';
import { RoleComponent } from './components/roles/role.component';


const pageRoutes: Routes = [
    {
        path : '' ,
        component : PageComponent,
        children: [
            { path : 'listUsers', component: ListUsersComponent },
            { path : 'user/:id', component: UserComponent },
            { path : 'listRoles', component: ListRolesComponent },
            { path : 'role', component: RoleComponent }
        ]
    }
];

export const PAGE_ROUTES = RouterModule.forChild ( pageRoutes );
