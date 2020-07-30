import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role-main/role.component';
import { UserListComponent } from '../userlist/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
     component: RoleComponent,
    data: {
      title: 'Role Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule { }
