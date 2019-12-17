import { Pipe, PipeTransform } from '@angular/core';
import { TransactionType, Transaction } from 'src/app/models/transaction';

@Pipe({
  name: 'transaction'
})
export class TransactionPipe implements PipeTransform {

  transform(value: TransactionType): string {
    return Transaction.NameFor(value);
  }

}
