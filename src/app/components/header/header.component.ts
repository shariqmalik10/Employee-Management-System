import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  title = 'Employee Management System';
  showAddEmployee: boolean;
  subscription: Subscription;

  //runs whenever component intialized
  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddEmployee=value))
  }

  ngOnInit(): void {
  }

  toggleAddEmployee() {
    this.uiService.toggleAddEmployee();
  }

}
