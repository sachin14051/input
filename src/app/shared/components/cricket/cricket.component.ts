import { Component, Input, OnInit } from '@angular/core';
import { Icricket } from '../../models/cricket';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss']
})
export class CricketComponent implements OnInit {
  @Input() public cricInfo !: Icricket
  constructor() { }

  ngOnInit(): void {
  }

}
