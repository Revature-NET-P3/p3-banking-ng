import { Account } from './account';
import { Observable } from 'rxjs';

export interface AccountViewChild{
    account: Account;
    accounts$: Observable<Account[]>;
}