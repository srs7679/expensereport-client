import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms'; 
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styles: [`
  input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}
  
  `]
})


export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  
  isadded:boolean=false;
  userForm:FormGroup
 
  val:any;

  constructor(private employeeService: EmployeeService,
    private router: Router, public fb: FormBuilder) {
    }
     
    price1:number=undefined;
  tax1:number=undefined;
  amount1:number=undefined;
  quantity1:number=undefined;
  total1:number=undefined;

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['',[Validators.required, this.noWhitespaceValidator ]],
      price: ['',[Validators.required,Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
      quantity: ['',[Validators.required,Validators.pattern('^[0-9]+([0-9]{1,2})?$')]], 
      tax:['',Validators.required ],
      amount: ['',Validators.required,],
      total: ['',Validators.required],
      purchase_date: ['',Validators.required],
      created_by : ['',[Validators.required,this.noWhitespaceValidator]],
      updated_by : [''],
      
    })
    //this.userForm.get('tax').disable();
    
  }
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

  onSubmit(){
 
  this.save();

 
  this.gotoList();
    
}
resetForm(value:any){
  this.userForm.reset(value);
}
  
  save() {
    this.employeeService.createEmployee(this.userForm.value)
      .subscribe(data => console.log(data),(error: Response) => {  
         if(error.status === 200)  {
        alert('Expense Added!!!'); 
        
        console.log(error); 
      } 
      else if(error.status === 400)  {  
        
        alert(' Error Occured in client Side');  
        console.log(error);  
      }else {  
          
        alert('An Unexpected Error Occured.');  
        console.log(error);  
      }
    
     
    });
    
   // this.showBasicDialog();
    this.employee = new Employee();
   
   
    
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
 