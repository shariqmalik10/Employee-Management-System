import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  title = 'Employee Management System';

  //runs whenever component intialized
  constructor(){}

  ngOnInit(): void {
  }

  toggleAddEmployee() {
    console.log('toggle');
  }

}
