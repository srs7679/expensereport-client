import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RoleRoutingModule } from "./role-routing.module";
import { RoleFormComponent } from './role-form/role-form.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleUpdateComponent } from './role-update/role-update.component';
import { RoleComponent } from './role-main/role.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from 'app/dialog-box/dialog-box.component';
import { UserFormComponent } from '../user-form/user-form.component';


@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    RoleRoutingModule,
    MatDialogModule
  ],
    declarations: [       
        RoleComponent, RoleFormComponent, RoleCreateComponent, RoleUpdateComponent
    ],
    entryComponents: [
        DialogBoxComponent,UserFormComponent
      ],
})
export class RoleModule { }
