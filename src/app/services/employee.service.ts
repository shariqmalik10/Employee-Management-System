import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import { EmployeeList } from 'src/app/emplist';
import { EMPLOYEES } from 'src/app/mock-emplist';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // constructor() { }

  // getEmployees(): Observable<EmployeeList[]> {
  //   const employees = of(EMPLOYEES);
  //   return employees;
  // }
  
  private apiUrl = 'http://localhost:5000/employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<EmployeeList[]> {
    return this.http.get<EmployeeList[]>(this.apiUrl);
  }

  deleteEmployee(employee: EmployeeList): Observable<EmployeeList> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.delete<EmployeeList>(url);
  }

  updateSalaryReminder(employee: EmployeeList): Observable<EmployeeList> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.put<EmployeeList>(url, employee, httpOptions);
  }

  addEmployee(employee: EmployeeList): Observable<EmployeeList> {
    return this.http.post<EmployeeList>(this.apiUrl, employee, httpOptions);
  }


}
