import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup, FormBuilder,Validators, FormArray, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styles: [`
  input.ng-invalid{border-left:5px solid red;}
  input.ng-valid{border-left:5px solid green;}

  `]
})
export class UserUpdateComponent implements OnInit {
 
  statuses:SelectItem[];
  userForm:FormGroup
  usertypes:SelectItem[];
  id: number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService,public fb: FormBuilder,public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig) {
      this.statuses=[];
      this.statuses.push({label:'Active',value:'Active'});
      this.statuses.push({label:'Inactive',value:'Inactive'});
      this.usertypes=[];
      this.usertypes.push({label:'Employee',value:'Employee'});
      this.usertypes.push({label:'Employer',value:'Employer'});
      this.usertypes.push({label:'Company',value:'Company'});
     }

  ngOnInit() {
    this.user = new User();

    //this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.config.data.id)
      .subscribe(data => {
        this.userForm.controls["firstname"].setValue(data.firstname);
        this.userForm.controls["lastname"].setValue(data.lastname);
        this.userForm.controls["email"].setValue(data.email);
        this.userForm.controls["mobile"].setValue(data.mobile);
       
        this.userForm.controls["status"].setValue(data.status);
        this.userForm.controls["usertype"].setValue(data.usertype);
      });
       this.userForm = this.fb.group({
        firstname: ['', [Validators.required, this.noWhitespaceValidator, Validators.minLength(3) ]  ],
        lastname: ['',[Validators.required,this.noWhitespaceValidator, Validators.minLength(3)] ],
        email: ['',[Validators.required , Validators.email ]], 
        mobile:['',[Validators.required , Validators.pattern('^[0-9]{10}$') ]],
        
        status:['',Validators.required ],  
        usertype:this.fb.array([this.addusertypegroup()])  
      });
     
     
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}
  addusertype() {
    this.usertypeArray.push(this.addusertypegroup());
  }
  removeusertype(index) {
    this.usertypeArray.removeAt(index);
  }
  get usertypeArray() {
    return <FormArray>this.userForm.get('usertype');
  }
 addusertypegroup() {
    return this.fb.group({
      name: ['',Validators.required ],
      
    });
  }
 
  onNoClick(): void {
    this.ref.close();
   }

  updateUser() {
    this.userService.updateUser(this.config.data.id, this.userForm.value)
      .subscribe(data => console.log(data), (error: Response) => {  
        if(error.status === 202)  {
          alert('User Updated Successfully in Database!!!');  
          console.log(error); 
        } 
        else {  
          
          alert('An Unexpected Error Occured.');  
          console.log(error);  
        }});
    this.user = new User();
    
  }

 onSubmit(){
   this.updateUser();
   this.ref.close();
 }

  //gotoList() {
    //this.router.navigate(['/users']);
 // }
  
}
