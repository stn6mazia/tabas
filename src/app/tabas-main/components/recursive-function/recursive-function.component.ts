import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recursive-function',
  templateUrl: './recursive-function.component.html',
  styleUrls: ['./recursive-function.component.scss']
})
export class RecursiveFunctionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  factorial(n) {
    console.log(n)
    return (n !== 10) ? n * this.factorial(n + 1) : 1
  }

}
