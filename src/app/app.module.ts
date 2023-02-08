import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HeaderComponent,
    ButtonComponent,
    EmployeeItemComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
