import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from 'app/pages/user/user.component';

const routes: Routes = [
  {
    path: '',
     component: UserComponent,
    data: {
      title: 'User Page'
    },    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
