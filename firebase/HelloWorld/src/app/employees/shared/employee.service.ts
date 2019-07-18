import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';


@Injectable()
export class EmployeeService {

  employeeList: AngularFireList<any>;
  employeeList1: Employee[];
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.firebase.list('employees').valueChanges().subscribe((item: Employee[]) => {
      this.employeeList1 = item;
    });
    return this.employeeList1;
  }

  inserEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    })
  }
}
