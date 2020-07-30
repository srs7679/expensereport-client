import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Currency } from '../currency';
import { EmployeeService } from '../employee.service';
import { SelectItem } from 'primeng/api';
import { Employee } from '../employee';


@Component({
  selector: 'app-create-currency',
  templateUrl: './create-currency.component.html',
  styleUrls: ['./create-currency.component.css'],
  
})

export class CreateCurrencyComponent implements OnInit {
  employee: Employee;
  //curr: Observable<Currencies[]>;
  codes:SelectItem[];
  currencies: SelectItem[];
  currency: Currency = new Currency();
  submitted = false;
  id : number;
  //employeeService: any;
  addForm: FormGroup
  isadded: boolean=false;
  currency_name: any={};
 ;
  //cur:  Currency = new Currency();

 

  constructor(private employeeService: EmployeeService,public fb: FormBuilder,private router: Router,private route: ActivatedRoute) { 
    this.currencies=[];
      this.currencies.push({label:'US Dollar',value:'usd'});
      this.currencies.push({label:'Australian Dollar',value:'aud'});
      //this.currencies.push({label:'euro',value:'euro'});
      this.currencies.push({label:'Indian Rupees',value:'inr'});
      //this.currencies.push({label:'dinar',value:'dinar'});
      this.codes=[];
      this.codes.push({label:'USD',value:'usd'});
      this.codes.push({label:'AUD',value:'aud'});
      //this.currencies.push({label:'euro',value:'euro'});
      this.codes.push({label:'INR',value:'inr'});
      //this.currencies.push({label:'dinar',value:'dinar'});
  
  

  }

  ngOnInit(): void {
    
    this.addForm = this.fb.group({
      //id: ['',Validators.required],
         currency: [' ', Validators.required],
         code: [' ', Validators.required],
  
    });
    
  
  
   this.currency = new Currency();

 
  this.id = this.route.snapshot.params['id'];
    
  this.getById();

}

getById(){
  
  this.employeeService.getCurrency(this.id)
    .subscribe(data => {
      console.log(data)
      this.currency= data;
        
      console.log( data)
  
    }, error => console.log(error)
    );
       

}

getCurrency()

{
  
  this.employeeService.createCurrency(this.id,this.addForm.value)
    .subscribe(data => console.log(data), (error: Response) => {  
      if(error.status === 200)  {
        alert('Currency Added Successfully!!!');  
        
        console.log(error); 
      } 
     else if(error.status === 500)  {
        alert('Currency Code Already Exists!!!');  
        
        console.log(error); 
      } 
      else if(error.status === 400)  {
        alert('Client Side Error!!!');  
        
        console.log(error);  
      } 
      
      else {  
        
        alert('An Unexpected Error Occured.');  
        console.log(error);  
      }
      this.isadded=true;
    });
    
}

onSubmit(){
  
this.getCurrency();
this.getById();
if(this.isadded){
 
  location.reload();
}
else{
  location.reload();
}
}
 
onRowEditInit(id) {
       
}
 
onRowEditSave(exp:number,val:any) {

    this.employeeService.updateCurrency(this.id,exp,val)
    .subscribe(
      data => {
        console.log(data)
        this.getById();
    },
    (error: Response) => {  
      if(error.status === 500)  {
        alert('Currency Code already exists!!!'); 
      
        console.log(error); 
      } 
      else if(error.status === 200)  {
        alert('Currency Updated Successfully!!!');  
      
        console.log(error); 
      } 
      else {  
        
        alert('An Unexpected Error Occured.');  
        console.log(error);  
      }
      this.isadded=true;
    });
    
    if(this.isadded){
      
    location.reload();
    }
    else{
      location.reload(); 
    }
  }

  onRowEditCancel(exp:number) {
    this.employeeService.deleteCurrency(this.id,exp)
    .subscribe(
      data => {
        console.log(data);
        this.getById();
      },
      error => console.log(error));
    }

 
/*save() {
   this.employeeService.createCurrency(this.id,this.addForm.controls['currency_name'].value,this.addForm.controls['currency_code'].value)
   .subscribe(data => console.log(data), error => console.log(error));
      this.currency = new Currency();
    this.isadded=true
    }*/

    
   gotoList() {
  
      this.router.navigate(['/employees']); 
      }
 }
  