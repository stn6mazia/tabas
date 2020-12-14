import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'num-name',
  templateUrl: './num-name.component.html',
  styleUrls: ['./num-name.component.scss']
})
export class NumNameComponent implements OnInit {

  numName
  numNameInputValue

  th = ['', 'thousand', 'million', 'billion', 'trillion'];
  dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  constructor() { }

  ngOnInit() {
  }

  toWords(s) {
    s = s.toString(); s =
      s.replace(/[\, ]/g, ''); if (s != parseFloat(s)) return 'not a number'; var x =
        s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n =
          s.split(''); var str = ''; var sk = 0; for (var i: any = 0; i < x; i++) {
            if ((x - i) % 3 == 2) {
              if (n[i] == '1') {
                str += this.tn[Number(n[i + 1])] + ' '; i++; sk = 1;
              } else if (n[i] != 0) { str += this.tw[n[i] - 2] + ' '; sk = 1; }
            } else if (n[i] != 0) {
              str +=
                this.dg[n[i]] + ' '; if ((x - i) % 3 == 0) str += 'hundred '; sk = 1;
            }
            if ((x - i) % 3 == 1) {
              if (sk)
                str += this.th[(x - i - 1) / 3] + ' '; sk = 0;
            }
          }
    if (x != s.length) {
      var y = s.length;
      str += 'point '; for (var i = x + 1; i + str.replace(/\s+/g, ' '););

    }

    if (str) {
      return this.numName = str
    }
  }

}
