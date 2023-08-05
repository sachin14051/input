import { Component, Input, OnInit } from '@angular/core';
import { Istaff } from '../../models/models';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
 @Input() info !: Istaff
  constructor() { }

  ngOnInit(): void {
  }

}
