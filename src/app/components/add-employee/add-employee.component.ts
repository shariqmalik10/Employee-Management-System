import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
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

  showAddEmployee: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddEmployee=value))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //basic validation for the fields 

    if (!this.name) {
      alert('Please add employee details')
      return;
    }

    var letters = /^[A-Za-z]+$/;
    if (!this.name.match(letters)){
      alert('Please enter only alphabets')
      return;
    }

    //in html add span tag. dynamic message

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
