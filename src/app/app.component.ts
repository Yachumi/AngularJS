import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pulak';
  count=0;
  number1=0
  number2=0;
  sum=0;
  listofnumbers=[12,56,23,67,32];
  listofnames=['Pulak','Sourav','Avishek','Shubham','Rohit'];
  increment = () =>
  {
    this.count++;
  }
  decrement = () =>
  {
    this.count--;
  }
  add=() =>
  {
    this.sum=this.number1+this.number2;
  }
}
