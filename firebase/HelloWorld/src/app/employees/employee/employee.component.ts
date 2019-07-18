import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.employeeService.inserEmployee(form.value);
  }

}
