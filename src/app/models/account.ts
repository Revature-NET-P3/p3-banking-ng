import { TypeofExpr } from '@angular/compiler';
import { isNullOrUndefined } from 'util';

export class Account {
    id: number;
    userId: number;
    accountTypeId: number;
    balance: number;
    createDate: string;
    isClosed: boolean;
    accNickname: string;
    //private _nickname: null | string;
    // TODO: Make this display please
    /*get accNickname(){ 
        console.log("get accNickname");
        return !isNullOrUndefined(this._nickname) ? this._nickname : "(No nickname)" 
    }
    set accNickname(n: null|string){ this._nickname = n }*/
    public constructor(
        fields?: {
            id: number,
            userId: number,
            accountTypeId: number, // actually AccountType though
            balance: number,
            createDate: string,
            isClosed: boolean,
            accNickname?: null|string,
        }
    ) {
        if (fields) Object.assign(this, fields);
    }
}

export enum AccountType {
    Checking = 1,
    Business,
    Loan,
    Term
}

export namespace AccountType {
    // These must match the enum above.
    export function AllNames() {
        return ["Checking", "Business", "Loan", "Term"];
    }
}

//const date: Date = new Date(Date.now());
const openDate : string = new Date().toISOString();
//const intr: number = .05;

export const MOCK_ACCOUNTS: Account[] = [
    new Account({ id: 1, userId: 2, accountTypeId: 1, balance: 300, createDate: openDate, isClosed: false }),
    new Account({ id: 2, userId: 2, accountTypeId: 2, balance: 190, createDate: openDate, isClosed: false }),
    new Account({ id: 3, userId: 3, accountTypeId: 1, balance: 32000, createDate: openDate, isClosed: false }),
    new Account({ id: 4, userId: 1, accountTypeId: 1, balance: 2100, createDate: openDate, isClosed: false }),
    new Account({ id: 5, userId: 4, accountTypeId: 1, balance: 21300, createDate: openDate, isClosed: false }),
]
// export const MOCK_ACCOUNTS : Account[] = [
//     { Id: 1, name: 'Checking-34', accountNumber: 1234, balance: 300, opendate: date, interest:intr, type: AccountType.Checking },
//     { Id: 2, name: 'Business-45', accountNumber: 2345, balance: 190, opendate: date, interest: intr, type: AccountType.Business },
//     { Id: 3, name: 'Checking-56', accountNumber: 3456, balance: 32000, opendate: date, interest: intr, type: AccountType.Checking },
//     { Id: 4, name: 'Checking-67', accountNumber: 4567, balance: 2100, opendate: date, interest: intr, type: AccountType.Checking },
//     { Id: 5, name: 'Checking-78', accountNumber: 5678, balance: 300, opendate: date, interest:intr, type: AccountType.Checking },
//     { Id: 6, name: 'Loan-89', accountNumber: 6789, balance: 28000, opendate: date, interest: intr, type: AccountType.Loan },
//     { Id: 7, name: 'TermDep-90', accountNumber: 7890, balance: 5000, opendate: date, interest: intr, type: AccountType.Term },
//     { Id: 8, name: 'Business-01', accountNumber: 8901, balance: 23050, opendate: date, interest: intr, type: AccountType.Business },
//     { Id: 9, name: 'Loan-12', accountNumber: 9012, balance: 1000, opendate: date, interest: intr, type: AccountType.Loan }
// ]
