export class Account {
    id: string;
    accountname: string;
    accountnumber: number;
    balance: number;
    interest: number;
    opendate: Date;
}

export const ACCOUNT = [
    { id: 1, accountname: 'Checking-34', accountnumber: '1234', balance: 300 },
    { id: 2, accountname: 'Business-45', accountnumber: '2345', balance: 190 },
    { id: 3, accountname: 'Checking-56', accountnumber: '3456', balance: 32000 },
    { id: 4, accountname: 'Checking-67', accountnumber: '4567', balance: 2100 },
];