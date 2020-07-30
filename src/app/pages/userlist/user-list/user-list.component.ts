
import { Observable } from "rxjs";
import { UserService } from "../user.service";

import { User } from "../user";
import { Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import {DialogService} from 'primeng/dynamicdialog';
import { saveAs } from 'file-saver';
import {ConfirmationService, MessageService, Message} from 'primeng/api';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { FormControl } from '@angular/forms';



//import { CreateUsertypeComponent } from '../create-usertype/create-usertype.component';
//import pdfMake from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
//pdfMake.vfs = pdfFonts.pdfMake.vfs;
//import * as jsPDF from 'jspdf'; 
//import html2canvas from 'html2canvas';  
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styles: [``],
   
  providers: [DialogService,ConfirmationService,MessageService]
})
export class UserListComponent implements OnInit {
users: Observable<User[]>;

user;
cols: any[];
allStatus: any[];
id:number;
isPopupOpened = true;
msgs: Message[] = [];

excels=[];



  constructor(private confirmationService: ConfirmationService,private userService?: UserService,
    private router?: Router,public dialogService?: DialogService) {
      this.userService.getUserList().subscribe(data => {
        data.forEach(row => {
          this.excels.push(row);
        });
       });
      
       

    }


    

  ngOnInit() {
    this.reloadData();
   
  
  }
 

  reloadData() {
  this.userService.getUserList().subscribe(data => this.users = data);
  this.cols = [
    { field: 'id', header: 'ID' },
    { field: 'firstname', header: 'First Name' },
    { field: 'lastname', header: 'Last Name' },
    { field: 'email', header: 'Email ID' },
    { field: 'mobile', header: 'Mobile No' },
    { field: 'status', header: 'Status' }
                ]; 
this.allStatus = [
      { label: 'All Status', value: null },
      { label: 'Active', value: 'Active' },
      { label: 'Inactive', value: 'Inactive' }
                  ];
 }
  

  deleteUser(id: number) {
      this.userService.deleteUser(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
  }
  userUpdate(id:number){
        this.isPopupOpened = true;
        const ref = this.dialogService.open(UserUpdateComponent, {
          data: {
              id: id
          },
          header: 'Update User',
          width: '70%'
          
      });
      ref.onClose.subscribe(result => {
        this.isPopupOpened = false;
       
        this.reloadData();
        alert("User updated");
        location.reload();
      
      });
      
  }

  userDetails(id:number){
    const ref = this.dialogService.open(UserDetailsComponent, {
      data: {
          id: id
      },
      header: 'User Details',
      width: '50%'

  });
 
 }



 
  userAdd(){
    this.isPopupOpened = true;
    const ref = this.dialogService.open(  CreateUserComponent , {
      data: {
          
      },
      header: 'Add User',
      width: '70%',
    
  });
  ref.onClose.subscribe(result => {
    
    this.isPopupOpened = false;
    this.reloadData();
    alert("User Added");
    location.reload();
   
  });

  }



  




confirm2(id:number,name:String) {
  this.confirmationService.confirm({
      message: 'Do you want to delete records of  ' +name+' ?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteUser(id);
       // alert('Records of '+name+' deleted successfully')
          this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
         // alert('You have rejected')
      }
  });
}

csv(use){
  const items = use
  const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
  const header = Object.keys(items[0])
  let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  csv.unshift(header.join(','))
  csv = csv.join('\r\n')
  var blob = new Blob([csv], {type: 'text/csv' })
      saveAs(blob, "users.csv");
  console.log(csv)
  
  }





}























