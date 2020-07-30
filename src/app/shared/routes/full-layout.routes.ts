import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangeLogModule)
  },
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../../pages/user/user.module').then(m => m.UserModule)
  }
  ,  {
    path: 'roles',
    loadChildren: () => import('../../pages/role/role.module').then(m => m.RoleModule)
  },
  {
    path: 'users',
    //loadChildren: () => import('../../pages/role/role.module').then(m => m.RoleModule)
    loadChildren: () => import('../../pages/userlist/crud.module').then(m => m.CrudModule)
  },
  {
    path: 'exptracker',
    //loadChildren: () => import('../../pages/role/role.module').then(m => m.RoleModule)
    loadChildren: () => import('../../pages/exptracker/exptracker.module').then(m => m.ExptrackerModule)
  }
];
