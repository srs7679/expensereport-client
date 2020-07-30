import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Expense } from '../expense';
import { User } from '../user';
import { Router ,ActivatedRoute} from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms'; 
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-create-usertype',
  templateUrl: './create-usertype.component.html',
  styleUrls: ['./create-usertype.component.scss']
})
export class CreateUsertypeComponent implements OnInit {
  user: User;
  usertype:SelectItem[];
  expenses: Expense = new Expense();
  userForm:FormGroup
  id: number;
  expense:any=[];
  name:any={};
  isadded:Boolean;

  constructor(private userService: UserService,private route: ActivatedRoute,
    private router: Router, public fb: FormBuilder) { 
      this.usertype=[];
      this.usertype.push({label:'Employee',value:'Employee'});
      this.usertype.push({label:'Employer',value:'Employer'});
      this.usertype.push({label:'Company',value:'Company'});
    }

  ngOnInit(): void {
    
    
    this.userForm = this.fb.group({
      name: ['']
       
    });

    
    this.expenses = new Expense();

    this.id = this.route.snapshot.params['id'];
    
    this.getById();





  }
  getById(){
    //alert("UserType added!!!");
    this.userService.getExpenseType(this.id)
      .subscribe(data => {
        console.log(data)
        this.expenses= data;
     
      }, error => console.log(error)
      );

  }
  getExpenseUser()
  {
    
    this.userService.createExpenseUserType(this.id,this.userForm.value)
      .subscribe(data => console.log(data), error => console.log(error));
      this.isadded=true;
  }

  onSubmit(){
    
  this.getExpenseUser();
  this.getById();
  location.reload();
  
 
   
  }
   

  

onRowEditInit(id) {
       
    }

    onRowEditSave(exp:number,val:any) {

      this.userService.updateExpenseType(this.id,exp,val)
      .subscribe(
        data => {
          console.log(data)
          this.getById();
          
        },
        error => console.log(error));
        location.reload();
        
    }

    onRowEditCancel(exp:number) {
      this.userService.deleteExpenseType(this.id,exp)
      .subscribe(
        data => {
          console.log(data);
          this.getById();
        },
        error => console.log(error));
      
    }

   

    }





