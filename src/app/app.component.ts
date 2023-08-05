import { Component, Input } from '@angular/core';
import { Istaff } from './shared/models/models';
import { Icricket } from './shared/models/cricket';
import { Idate } from './shared/models/date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'input';
   public employee: Istaff = {
    fname: 'jhon',
    lname: 'dow',
    contact: 123466789,
    email: 'jhon@gmail.com'
  };

  public sport : Icricket = {
    captain: 'Ms-Dhoni',
    viceCaptain: 'Virat_kohli',
    players: ["rohit sharma","yuvraj singh","ravindra jadeja","harbhajan singh"],
    achievmentYears: [1983,2011]
  }

public dates : Idate ={
  date: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  month: ["jan", "feb" , "march", "april" , "may"],
  year: [1900,2000,2010,2020,2030,2040],
  day: ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
}

}
