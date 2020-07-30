import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

 
 
  user: User;

  constructor(
    private userService: UserService,public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig
    ) { }

  ngOnInit() {
    this.user = new User();
    
    this.userService.getUser(this.config.data.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  

}
