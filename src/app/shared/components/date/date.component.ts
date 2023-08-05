import { Component, Input, OnInit } from '@angular/core';
import { Idate } from '../../models/date';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() daysinfo !: Idate 
  constructor() { }

  ngOnInit(): void {
  }

}
