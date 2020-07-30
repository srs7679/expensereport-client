import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UserRoutingModule } from "./user-routing.module";

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { UserComponent } from './user.component';
import { DialogBoxComponent } from 'app/dialog-box/dialog-box.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
        ReactiveFormsModule
    
    ],
    declarations: [       
        UserComponent
    ],
   //schemas:[CUSTOM_ELEMENTS_SCHEMA],
    exports:[FormsModule]
})
export class UserModule { }
