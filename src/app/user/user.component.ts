import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  things: any[];


  constructor() {
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ngOninit ran');
    this.name = 'Vibhor Garg';
  }

  onClick() {
    console.log('deleted');
  }
  addthings(things) {
    this.things.unshift(things);
    return false;
  }
  deleteTodo(things) {

  }
}