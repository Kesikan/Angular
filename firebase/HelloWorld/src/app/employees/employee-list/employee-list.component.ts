import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Employee } from '../shared/employee.model';
import { map } from 'rxjs/operator/map';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeelist: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeelist = this.employeeService.getData();
   /*  x.snapshotChanges().subscribe((data) => {
      this.employeelist = data;
      console.log(data);
    }) */
/*     x.snapshotChanges().subscribe(item => {
      this.employeelist = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeelist.push(y as Employee)
      })
    }) */
  }

}
