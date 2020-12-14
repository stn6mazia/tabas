import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-args',
  templateUrl: './dynamic-args.component.html',
  styleUrls: ['./dynamic-args.component.scss']
})
export class DynamicArgsComponent implements OnInit {

  clicks
  constructor() { }

  ngOnInit() {
  }

  addtoClicks() {
    this.clicks += 1

    for (let i = 0; i < this.clicks; i++) {
      this.variableFunction(i)
    }
  }

  variableFunction(...args) {
    args.forEach(arg => console.log(arg))
  }

}
