import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { EmployeeList } from 'src/app/emplist';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit{
  @Output() onAddEmployee: EventEmitter<EmployeeList> = new EventEmitter();

  name: string;
  join_date: string;
  department: string;
  salary_date: string;
  reminder: boolean = false;

  constructor(){}

  ngOnInit(): void {
  }

  onSubmit() {
    //basic validation for the fields 

    if (!this.name) {
      alert('Please add a task')
      return;
    }

    const newEmployee = {
      Name: this.name,
      join_date: this.join_date,
      Department: this.department,
      salaryDue: this.salary_date,
      reminder: this.reminder
    };

    //after submission clear the entry

    this.onAddEmployee.emit(newEmployee);

    this.name = "";
    this.join_date = "";
    this.department = "",
    this.salary_date="",
    this.reminder = false
  }


  

}
