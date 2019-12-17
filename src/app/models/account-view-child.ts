import { Account } from '../../models/account';
import { Observable } from 'rxjs';

export interface AccountViewChild{
    account: Account;
    accounts$: Observable<Account[]>;
}