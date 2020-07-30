import { Directive, forwardRef, 
  Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,
  AbstractControl,ValidatorFn, } from '@angular/forms';

import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Component, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface UsersData {
  id: number;
  firstName: string;
  lastName: string;
  displayName: string;
  emailId: string;
  mobile: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  pincode: string;
  role: string;
  status: string;
}

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
  exportAs: 'userForm'
})
export class UserFormComponent {
  action: string;
  local_data: any;

  myGroup = new FormGroup({
    firstName: new FormControl()
 });

  
    
  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData
  ) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  

  doAction() {
    console.log(
      "this.local_data action===>" + this.local_data.roleName,
      this.action
    );
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: "Cancel" });
  }
}
