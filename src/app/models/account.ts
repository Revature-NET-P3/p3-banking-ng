export abstract class Account {
    Id: number;
    UserId: number;
    AccountTypeId: number;
    Balance: number;
    CreateDate: Date;
    IsClosed: boolean;
}

/*
    Account Types
    1: Checking
    2: Business
    3: Loan
    4: Term Deposit
*/

export enum AccountType {
    Checking = 1,
    Business,
    Loan,
    Term
}

const date: Date = new Date(Date.now());
export const MOCK_ACCOUNTS : Account[] = [
    { Id: 1, UserId: 2, AccountTypeId: 1, Balance: 300, CreateDate: date, IsClosed: false },
    { Id: 2, UserId: 2, AccountTypeId: 2, Balance: 190, CreateDate: date, IsClosed: false },
    { Id: 3, UserId: 3, AccountTypeId: 1, Balance: 32000, CreateDate: date, IsClosed: false },
    { Id: 4, UserId: 1, AccountTypeId: 1, Balance: 2100, CreateDate: date, IsClosed: false },
    { Id: 5, UserId: 4, AccountTypeId: 1, Balance: 21300, CreateDate: date, IsClosed: false }
];