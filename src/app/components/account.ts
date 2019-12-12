export class Account {
    id: number;
    UserId: number;
    accounttypeId: number;
    balance: number;
    Createddate: Date;
    Isclosed: boolean;
    Name: string;
}

export const ACCOUNT = [
    { id: 1, UserId: 1, accounttypeId: '1', balance: 300, Name: 'Checking' },
    { id: 2, UserId: 2, accounttypeId: '2', balance: 190, Name: 'Business' },
    { id: 3, UserId: 3, accounttypeId: '1', balance: 32000, Name: 'Checkimg' },
    { id: 4, UserId: 4, accounttypeId: '4', balance: 2100, Name: 'Term Deposit' },
    { id: 5, UserId: 5, accounttypeId: '1', balance: 21300, Name: 'Checking' }
];