import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {CreateUserComponent} from  './create-user/create-user.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsertypeComponent } from './usertype/usertype.component';
import { CreateUsertypeComponent } from './create-usertype/create-usertype.component';


const routes: Routes = [{ path: '', redirectTo: 'list', pathMatch: 'full' },
{ path: 'list', component: UserListComponent },
{ path: 'add', component: CreateUserComponent },  
{ path: 'details/:id', component: UserDetailsComponent },
{ path: 'update/:id', component: UserUpdateComponent },
{ path: 'expense', component: UsertypeComponent }, 
{ path: 'expense/add/:id', component: CreateUsertypeComponent }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
