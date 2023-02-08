import { Component, Input, OnInit } from '@angular/core';
import { EmployeeList } from 'src/app/emplist';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{

  employees: EmployeeList[] = [];

  constructor(private empService: EmployeeService){}


  ngOnInit(): void {
    this.empService.getEmployees().subscribe((employees) => (this.employees = employees))
  }

  deleteEmployee(employee: EmployeeList){
    this.empService.deleteEmployee(employee)
    .subscribe(
      () => (this.employees=this.employees.filter((e)=>e.id ! == employee.id)));
  }

  toggleReminder(employee: EmployeeList){
    employee.reminder = !employee.reminder;
    this.empService.updateSalaryReminder(employee).subscribe();
  }

  addEmployee(employee: EmployeeList) {
    this.empService.addEmployee(employee)
    .subscribe(
      (employee) => (this.employees.push(employee)));
  }



}
