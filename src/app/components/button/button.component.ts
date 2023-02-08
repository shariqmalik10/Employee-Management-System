import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{
  ngOnInit(): void {
  }

  //to be able to quickly edit the button stylng
  @Input() text!: string;
  @Input() color!: string;
  //output of button
  @Output() btnClick = new EventEmitter();

  constructor(){}

  onClick(){
    this.btnClick.emit();
  }



}
 