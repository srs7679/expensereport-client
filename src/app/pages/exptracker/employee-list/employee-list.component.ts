import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {ConfirmationService, MessageService, Message} from 'primeng/api';
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styles: [`
  :host ::ng-deep button {
    margin-right: .25em;
    `]
,
  providers: [ConfirmationService,MessageService]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  msgs: Message[] = [];










  constructor(private confirmationService: ConfirmationService,private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  expenseAdd(){
    this.router.navigate(['exptracker/add']);
  }
  expenseList(){
    this.router.navigate(['exptracker/employees']);
  }
  reloadData() {
    //alert("updateemployee")
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['exptracker/details', id]);
  }

  addcurrency(id: number){
    this.router.navigate(['exptracker/currency', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['exptracker/update', id]);
    this.reloadData();
  }

  confirm2(id:number,name:String) {
  
    this.confirmationService.confirm({
     
        message: 'Do you want to delete records of  ' +name+' ?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.deleteEmployee(id);
         // alert('Records of '+name+' deleted successfully')
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
           // alert('You have rejected')
        }
    }
    );
  
  } 
  

}
