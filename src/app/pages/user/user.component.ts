import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogBoxComponent } from 'app/dialog-box/dialog-box.component';
import { UserFormComponent } from '../user-form/user-form.component';

export interface UserData {
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


/** Constants used to fill up our data base. */
const ADDRESS1: string[] = [
  '12,abc street', '25,xyz street'
];
const ADDRESS2: string[] = [
  'woraiyur , trichy', 'palakarai , trichy'
];

const EMAILID: string[] = [
  'abc@gmail.com', 'srs7679@gmail.com', 'rt_2345@rubixtek.com'
];

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const STATES: string[] = [
  'TN', 'AP', 'KL', 'KA', 'UP'
];

const MOBILES: string[] = [
  '123-456-789', '456-789-123', '789-123-456'
];

const PINCODE: string[] = [
  '100 456', '600 789', '200 4789'
];

const ROLES: string[] = [
  'Partner', 'customer', 'farmer', 'vendor'
];

const STATUS: string[] = [
  'Active', 'In Active'
];

const CITIES: string[] = [
  'CHN', 'MUM', 'KOL', 'BAL', 'DEL'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-user',
  styleUrls: ['user.component.css'],
  templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit {
  dataSource: MatTableDataSource<UserData>;
  displayedColumns: string[] = ['firstName', 'lastName', 'displayName', 'emailId', 'mobile', 'address1', 'address2', 'city', 'state', 'pincode', 'role', 'status','action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(public dialog: MatDialog) {
    // Object to create Filter for
    // Create 100 users
    const users = Array.from({ length: 10 }, (_, k) => createNewUser(k + 1));
   //const users = ELEMENT_DATA;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  openDialog(action,obj) {
    
    obj.action = action;
    const dialogRef = this.dialog.open(UserFormComponent, {
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  addRowData(row_obj){
    var d = new Date();
    /*this.dataSource.push({
      id:d.getTime(),
      roleName:row_obj.name,
      status:row_obj.status
    });*/
    console.log("row_obj data===>" + row_obj);
    console.log("addrow data===>" + row_obj.role);
    this.dataSource.data.push({
      id: d.getTime(),
      firstName: row_obj.firstName,
      lastName: row_obj.lastName,
      displayName: row_obj.displayName,
      emailId: row_obj.emailId,
      mobile: row_obj.mobile,
      address1: row_obj.address1,
      address2: row_obj.address2,
      state:row_obj.state,
      city: row_obj.city,
      pincode: row_obj.pincode,
      role: row_obj.role,
      status: row_obj.status
        });
    //this.dataSource.data.push(createNewUser(this.dataSource.data.length + 1));
    this.dataSource.filter = "";
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource.data.filter((value, key) => {
      if (value.id == row_obj.id) {
        (value.firstName = row_obj.firstName), 
        (value.lastName = row_obj.lastName);
        (value.displayName = row_obj.displayName), 
        (value.emailId = row_obj.emailId);
        (value.mobile = row_obj.mobile), 
        (value.address1 = row_obj.address1);
        (value.address2 = row_obj.address2), 
        (value.state = row_obj.state);
        (value.city = row_obj.city), 
        (value.pincode = row_obj.pincode);
        (value.role = row_obj.role), 
        (value.status = row_obj.status);
      }
      return true;
    });
    this.table.renderRows();
      }
  deleteRowData(row_obj){
    const ELEMENT_DATA1: UserData[] = this.dataSource.data.filter(
      (value, key) => {
        console.log("key===>" + key);
        console.log("value.id===>" + value.id);
        console.log("row_obj.id===>" + row_obj.id);
        return value.id != row_obj.id;
      }
    );
    this.dataSource = new MatTableDataSource(ELEMENT_DATA1);
    // this.table.renderRows();
  }


  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // Get Unique values from columns to build filter
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  const state = STATES[Math.round(Math.random() * (STATES.length - 1))];

  const city = CITIES[Math.round(Math.random() * (CITIES.length - 1))];

  const mobile = MOBILES[Math.round(Math.random() * (MOBILES.length - 1))];

  const pincode = PINCODE[Math.round(Math.random() * (PINCODE.length - 1))];

  const role = ROLES[Math.round(Math.random() * (ROLES.length - 1))];

  const status = STATUS[Math.round(Math.random() * (STATUS.length - 1))];

  const address1 = ADDRESS1[Math.round(Math.random() * (ADDRESS1.length - 1))];

  const address2 = ADDRESS2[Math.round(Math.random() * (ADDRESS2.length - 1))];

  const emailId = EMAILID[Math.round(Math.random() * (EMAILID.length - 1))];

  return {
    id: id,
    firstName: name,
    lastName: name,
    displayName: name.substring(0,3),
    emailId: emailId,
    mobile: mobile,
    address1: address1,
    address2: address2,
    state: state,
    city: city,
    pincode: pincode,
    role: role,
    status: status,
  };
}

