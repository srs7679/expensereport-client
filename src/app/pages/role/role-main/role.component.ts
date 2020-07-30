import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource, MatTable } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { DialogBoxComponent } from 'app/dialog-box/dialog-box.component';

export interface RoleData {
  id: number;
  roleName: string;
  status: string;
}

const ROLES: string[] = ["Partner", "customer", "farmer", "vendor"];

const STATUS: string[] = ["Active", "In Active"];
const ELEMENT_DATA: RoleData[] = [
  { id: 1560608769632, roleName: "Artificial Intelligence", status: "Active" },
  { id: 1560608796014, roleName: "Machine Learning", status: "Active" },
  {
    id: 1560608787815,
    roleName: "Robotic Process Automation",
    status: "In Active",
  },
  { id: 1560608805101, roleName: "Blockchain", status: "Active" },
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: "app-role",
  styleUrls: ["role.component.css"],
  templateUrl: "role.component.html",
})
export class RoleComponent implements OnInit {
  dataSource: MatTableDataSource<RoleData>;
  displayedColumns: string[] = ["id", "roleName", "status", "action"];
  //dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  // @ViewChild("table", { static: true }) table: MatTable<any>;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = ELEMENT_DATA;
    this.dataSource = new MatTableDataSource(users);
  }
  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: obj,
    });
    console.log();
    dialogRef.afterClosed().subscribe((result) => {
      console.log("result===>" + result.event);
      if (result.event == "Add") {
        this.addRowData(result.data);
      } else if (result.event == "Update") {
        this.updateRowData(result.data);
      } else if (result.event == "Delete") {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    var d = new Date();
    /*this.dataSource.push({
      id:d.getTime(),
      roleName:row_obj.name,
      status:row_obj.status
    });*/
    console.log("row_obj data===>" + row_obj);
    console.log("addrow data===>" + row_obj.roleName);
    this.dataSource.data.push({
      id: d.getTime(),
      roleName: row_obj.roleName,
      status: row_obj.status,
    });
    //this.dataSource.data.push(createNewUser(this.dataSource.data.length + 1));
    this.dataSource.filter = "";
    this.table.renderRows();
  }
  updateRowData(row_obj) {
    console.log(row_obj.id);
    console.log(row_obj.roleName);
    this.dataSource.data.filter((value, key) => {
      if (value.id == row_obj.id) {
        (value.roleName = row_obj.roleName), (value.status = row_obj.status);
      }
      return true;
    });
    //this.dataSource.data.filter();
    /* this.dataSource.data.push({
      id: row_obj.id,
      roleName: row_obj.roleName,
      status: row_obj.status,
    });
    this.dataSource._updateChangeSubscription();*/
    //console.log(this.dataSource.push(row_obj));
    this.table.renderRows();
  }
  deleteRowData(row_obj) {
    const ELEMENT_DATA1: RoleData[] = this.dataSource.data.filter(
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number, roleData: RoleData): RoleData {
  const role = ROLES[Math.round(Math.random() * (ROLES.length - 1))];

  const status = STATUS[Math.round(Math.random() * (STATUS.length - 1))];

  return {
    id: id,
    roleName: role,
    status: status,
  };
}
