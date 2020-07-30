
import { Component, Inject, Optional } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface UsersData {
  status: string;
  roleName: string;
  id: number;
}

@Component({
  selector: "app-role-form",
  templateUrl: "./role-form.component.html",
  styleUrls: ["./role-form.component.css"],
})
export class RoleFormComponent {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<RoleFormComponent>,
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
