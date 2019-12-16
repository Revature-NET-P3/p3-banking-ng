import { Account } from './account';
import { Observable } from 'rxjs';

export interface AccountViewChildComponent{
    account: Account;
    accounts$: Observable<Account[]>;
}