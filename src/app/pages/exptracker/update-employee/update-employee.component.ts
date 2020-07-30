import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styles: [`
  input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}
  
  `]

})
export class UpdateEmployeeComponent implements OnInit {


  
  isupdated:boolean=false;
  isadded:boolean =false;
  userForm:FormGroup

  id: number;
  employee: Employee; 
  displayBasic: boolean;
  


  price1:number=undefined;
  tax1:number=undefined;
  amount1:number=undefined;
  quantity1:number=undefined;
  total1:number=undefined;


  
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService,public fb: FormBuilder) {
 
  }

  ngOnInit() {

    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        this.userForm.controls["id"].setValue(data.id);
        this.userForm.controls["name"].setValue(data.name);
        this.userForm.controls["price"].setValue(data.price);
        this.userForm.controls["quantity"].setValue(data.quantity);
        this.userForm.controls["tax"].setValue(data.tax);
        this.userForm.controls["amount"].setValue(data.amount);
        this.userForm.controls["total"].setValue(data.total);
        this.userForm.controls["purchase_date"].setValue(data.purchase_date);
        this.userForm.controls["created_by"].setValue(data.created_by);
        this.userForm.controls["updated_by"].setValue(data.updated_by);

      
      });
       this.userForm = this.fb.group({
        id: ['',[Validators.required ]],
        name: ['',[Validators.required, this.noWhitespaceValidator ]],
      price: ['',[Validators.required,Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      quantity: ['',[Validators.required,Validators.pattern('^[0-9]+([0-9]{1,2})?$')]], 
      tax:['',Validators.required ],
      amount: ['',Validators.required,],
      total: ['',Validators.required],
      purchase_date: ['',Validators.required],
      created_by : ['',[Validators.required,this.noWhitespaceValidator]],
        updated_by : ['',Validators.required],


      });
     
     
  }
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}
  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.userForm.value)
      .subscribe(data => console.log(data),(error: Response) => {  
        if(error.status === 200)  {
       alert('Expense updated Successfully!!!');  
       console.log(error); 
     } 
     else if(error.status === 400)  {  
       
       alert(' Error Occured in client Side');  
       console.log(error);  
     }
     else if(error.status === 500)  {  
       
      alert(' Error Occured in client Side');  
      console.log(error);  
    }else {  
         
       alert('An Unexpected Error Occured.');  
       console.log(error);  
     }
    
   });
   
    this.employee = new Employee();
    this.isupdated=true;
  }

  onSubmit() {
  
    this.updateEmployee();   
    this.gotoList();
  }

  gotoList() {
  
    this.router.navigate(['exptracker/employees']);
  }


  calculate(){
    this.tax1 = this.price1*0.1;
    this.amount1 = Number(this.tax1) + Number(this.price1);
    this.total1=Number(this.quantity1) * Number(this.amount1);
  }
}
