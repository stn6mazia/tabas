import { Pipe } from '@angular/core';

@Pipe({
    name: 'currencyFormat'
})
export class CurrencyFormat {
    transform(
        value: number,
        currencySign: string = '',
        decimalLength: number = 2,
        chunkDelimiter: string = '.',
        decimalDelimiter: string = ',',
        chunkLength: number = 3
    ): string {

        /* value /= 100; */
        if (value == 0 || value == undefined){
            return '0,00';
        }else{
            const result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
            const num = value.toFixed(Math.max(0, ~~decimalLength));

            return currencySign + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
        }

    }
}
