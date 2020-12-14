import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arr-args',
  templateUrl: './arr-args.component.html',
  styleUrls: ['./arr-args.component.scss']
})
export class ArrArgsComponent implements OnInit {
  clickArr: any[] = []
  constructor() { }

  ngOnInit() {
  }


  addNewItem() {
    if (!this.clickArr || this.clickArr == [] || this.clickArr.length == 0) {
      this.clickArr.push(1)
    } else {
      this.clickArr.push(this.clickArr.length + 1)
    }

    this.consoleArr('fistArg', this.clickArr)
  }

  consoleArr(arg, arr: any[]) {
    console.log(arg)
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
    }
  }
}
