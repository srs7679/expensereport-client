import { Component, OnInit,ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { UserService } from "../user.service";
import { Expense } from "../expense";
import { Router } from '@angular/router';


@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styles: [`
        .loading-text {
            display: block;
            background-color: #f1f1f1;
            min-height: 19px;
            animation: pulse 1s infinite ease-in-out;
            text-indent: -99999px;
            overflow: hidden;
        }
    `]
})
export class UsertypeComponent implements OnInit {
  expenses: Observable<Expense[]>;
  exp:Expense[];
  csvSeparator = ";";
  exportFilename = "exportData";
  filename="UserType.csv"
  
  cols: any[];
  
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.reloadData();
    
  }


  
    reloadData() {
      this.userService.getExpenseTypeList().subscribe(data => this.expenses = data);
      
        this.cols = [
          { field: 'user.id', header: 'User ID', },
           { field: 'name', header: 'UserType' },
         
          { field: 'user.firstname', header: 'First Name' },
          { field: 'user.lastname',header: 'Last Name'},
          { field: 'user.email', header: 'Email ID'},
          { field: 'user.mobile' ,header: 'Mobile No' },
          { field: 'user.status', header: 'Status' }
                      ];
    
     } 
    
     
    
}

 /* this.cols = [
          { field: 'user',subfield:"id", header: 'User ID',details: true },
           { field: 'name', header: 'UserType', exportable: true },
         
          { field: 'user',subfield:"firstname", header: 'First Name' , exportable: true,details: true},
          { field: 'user',subfield:"lastname" ,header: 'Last Name', exportable: true,details: true },
          { field: 'user',subfield:"email", header: 'Email ID', exportable: true,details: true },
          { field: 'user',subfield:"mobile" ,header: 'Mobile No' , exportable: true,details: true},
          { field: 'user',subfield:"status", header: 'Status', exportable: true,details: true }
                      ];*/
 /*exportCSV(filename, CsvData) {
      let data = CsvData, csv = '';
  
      console.log(data);
      //headers
      for (let i = 0; i < this.cols.length; i++) {
          if (this.cols[i].field) {
              csv += this.cols[i].field;
  
              if (i < (this.cols.length - 1)) {
                  csv += this.csvSeparator;
              }
          }
      }
  
      //body        
      CsvData.forEach((record, j) => {
          csv += '\n';
          for (let i = 0; i < this.cols.length; i++) {
              if (this.cols[i].field) {
                  console.log(record[this.cols[i].field]);
                 
                  let cellData = record[this.cols[i].field];
                    if (cellData != null) {
                        cellData = String(cellData).replace(/"/g, '""');
                    } else {
                        cellData = '';
                    }
                    csv += '"' + cellData + '"';
                  if (i < (this.cols.length - 1)) {
                      csv += this.csvSeparator;
                  }
              }
          }
      });
      this.DownloadFile(csv, filename);
  }
  DownloadFile(text, filename) {
    console.log(text);
    var blob = new Blob([text], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    }
    else //create a link and click it
    {
        var link = document.createElement("a");
        if (link.download !== undefined) // feature detection
        {
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}*/
    
