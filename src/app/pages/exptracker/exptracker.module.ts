import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExptrackerRoutingModule } from './exptracker-routing.module';
import { CreateEmployeeComponent } from 'app/pages/exptracker/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from 'app/pages/exptracker/employee-details/employee-details.component';
import { EmployeeListComponent } from 'app/pages/exptracker/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from 'app/pages/exptracker/update-employee/update-employee.component';
import { CreateCurrencyComponent } from 'app/pages/exptracker/create-currency/create-currency.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog'
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CreateCurrencyComponent],
  imports: [
    CommonModule,
    ExptrackerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    ToastModule,
    MessagesModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ExptrackerModule { }
