import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {EmployeeList} from '../../emplist'

import { EMPLOYEES } from 'src/app/mock-emplist';

import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit{

  @Input() employee: EmployeeList;
  @Output() onDeleteEmployee: EventEmitter<EmployeeList> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<EmployeeList> = new EventEmitter();
  faTimes = faTimes;

  ngOnInit(): void {
  }

  onDelete (employee){
    this.onDeleteEmployee.emit(employee);
  }

  onToggle(employee){
    this.onToggleReminder.emit(employee);
  }

}
