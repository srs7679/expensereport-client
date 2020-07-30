import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';
import { UserComponent } from './pages/user/user.component';
import { RoleComponent } from './pages/role/role-main/role.component';
import { UserListComponent } from './pages/userlist/user-list/user-list.component';
import { EmployeeListComponent } from './pages/exptracker/employee-list/employee-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'full-layout',
    pathMatch: 'full',
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent },
  { path: 'roles', component: RoleComponent },
  { path: 'users', component: UserListComponent },
  { path: 'exptracker', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
