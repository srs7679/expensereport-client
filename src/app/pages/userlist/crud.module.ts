
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog'
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UsertypeComponent } from './usertype/usertype.component';
import { CreateUsertypeComponent } from './create-usertype/create-usertype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [ UserListComponent, UserDetailsComponent, CreateUserComponent, UserUpdateComponent,UsertypeComponent, CreateUsertypeComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    DynamicDialogModule,
    CrudRoutingModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CrudModule { }
