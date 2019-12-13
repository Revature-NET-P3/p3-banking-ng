export abstract class Account {
    id: number;
    accountName: string;
    accountNumber: number;
    balance: number;
    interest: number;
    opendate: number;
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
    { id: 1, accountName: 'Checking-34', accountNumber: 1234, balance: 300, opendate: date, interest:intr, type: AccountType.Checking },
    { id: 2, accountName: 'Business-45', accountNumber: 2345, balance: 190, opendate: date, interest: intr, type: AccountType.Business },
    { id: 3, accountName: 'Checking-56', accountNumber: 3456, balance: 32000, opendate: date, interest: intr, type: AccountType.Checking },
    { id: 4, accountName: 'Checking-67', accountNumber: 4567, balance: 2100, opendate: date, interest: intr, type: AccountType.Checking },
    { id: 5, accountName: 'Checking-78', accountNumber: 5678, balance: 300, opendate: date, interest:intr, type: AccountType.Checking },
    { id: 6, accountName: 'Loan-89', accountNumber: 6789, balance: 28000, opendate: date, interest: intr, type: AccountType.Loan },
    { id: 7, accountName: 'TermDep-90', accountNumber: 7890, balance: 5000, opendate: date, interest: intr, type: AccountType.Term },
    { id: 8, accountName: 'Business-01', accountNumber: 8901, balance: 23050, opendate: date, interest: intr, type: AccountType.Business },
    { id: 9, accountName: 'Loan-12', accountNumber: 9012, balance: 1000, opendate: date, interest: intr, type: AccountType.Loan }
];