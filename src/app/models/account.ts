export abstract class Account {
    id: number;
    userId: number;
    accountTypeId: number;
    balance: number;
    createDate: string;
    isClosed: boolean;
    type: AccountType;
}

export enum AccountType{
    Checking,
    Business,
    Loan,
    Term
}

export class CheckingAccount extends Account { }
export class BusinessAccount extends Account { }
export class LoanAccount extends Account { }
export class TermAccount extends Account { } //Same as CD

const date = Date.now();
const intr: number = .05;
export const MOCK_ACCOUNTS : Account[] = [
    { id: 11, userId: 1, accountTypeId: 1, balance: 250, createDate: '12-13-2019T11:11:11', isClosed: false, type: AccountType.Checking},
    { id: 12, userId: 1, accountTypeId: 1, balance: 550, createDate: '12-13-2019T12:11:11', isClosed: false, type: AccountType.Checking},
    { id: 13, userId: 1, accountTypeId: 2, balance: 350, createDate: '12-13-2019T10:17:11', isClosed: false, type: AccountType.Business},
    { id: 14, userId: 1, accountTypeId: 3, balance: 750, createDate: '12-13-2019T11:12:11', isClosed: false, type: AccountType.Loan}
    
    /*
    { id: 1, accountName: 'Checking-34', accountNumber: 1234, balance: 300, opendate: date, interest:intr, type: AccountType.Checking },
    { id: 2, accountName: 'Business-45', accountNumber: 2345, balance: 190, opendate: date, interest: intr, type: AccountType.Business },
    { id: 3, accountName: 'Checking-56', accountNumber: 3456, balance: 32000, opendate: date, interest: intr, type: AccountType.Checking },
    { id: 4, accountName: 'Checking-67', accountNumber: 4567, balance: 2100, opendate: date, interest: intr, type: AccountType.Checking },
    { id: 5, accountName: 'Checking-78', accountNumber: 5678, balance: 21300, opendate: date, interest: intr, type: AccountType.Checking }
    */
];