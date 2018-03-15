import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { UserComponent } from './components/users/user.component';
import { PAGE_ROUTES } from './security.routes';
import { ListUsersComponent } from './components/users/list-users.component';
import { ListRolesComponent } from './components/roles/list-roles.component';
import { RoleComponent } from './components/roles/role.component';

@NgModule({
  declarations: [

  UserComponent,

  ListUsersComponent,

  ListRolesComponent,

  RoleComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    PAGE_ROUTES
  ],
  providers: []
})
export class SecurityModule { }
