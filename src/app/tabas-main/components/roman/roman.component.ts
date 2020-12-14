import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roman-numbers',
  templateUrl: './roman.component.html',
  styleUrls: ['./roman.component.scss']
})
export class RomanComponent implements OnInit {

  inputValue
  romanNumber
  constructor() { }

  ngOnInit() {
  }

  romanize(num) {
    if (!+num)
      return false;
    var digits = String(+num).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      roman = "",
      i = 3;
    while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    this.romanNumber = Array(+digits.join("") + 1).join("M") + roman;
  }

}
