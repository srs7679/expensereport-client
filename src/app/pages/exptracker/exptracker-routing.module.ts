import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from 'app/pages/exptracker/employee-list/employee-list.component';
import { CreateEmployeeComponent } from 'app/pages/exptracker/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from 'app/pages/exptracker/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from 'app/pages/exptracker/employee-details/employee-details.component';
import { CreateCurrencyComponent } from 'app/pages/exptracker/create-currency/create-currency.component';


const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'add', component: CreateEmployeeComponent },
    { path: 'update/:id', component: UpdateEmployeeComponent },
    { path: 'details/:id', component: EmployeeDetailsComponent },
    { path: 'currency/:id', component: CreateCurrencyComponent },
  
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExptrackerRoutingModule { }
