//what we need in our add employee form 
//initially id will be optional until data saved in json server

export interface EmployeeList {
    id?: number;
    Name: string;
    join_date: string;
    Department: string;
    salaryDue: string;
    reminder: boolean;
}