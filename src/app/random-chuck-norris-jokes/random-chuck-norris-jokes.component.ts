import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-chuck-norris-jokes',
  templateUrl: './random-chuck-norris-jokes.component.html',
  styleUrls: ['./random-chuck-norris-jokes.component.css']
})
export class RandomChuckNorrisJokesComponent implements OnInit {
  randomjokeobj: any;
  constructor(private http:HttpClient)
  {

  }

  ngOnInit(): void
  {

  }
  getrandomjoke = () =>
  {
    this.randomjokeobj=this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data: any) => this.randomjokeobj=data.value)
  }

}
