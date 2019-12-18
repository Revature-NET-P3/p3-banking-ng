export enum TransactionType {
    Withdraw = 1,
    Deposit,
    TransferTo,
    TransferFrom,
    Overdraft,
    Pay,
    Open,
    Close,
}

const TransactionTypeNames = {1:"Withdrawal", 2:"Deposit", 3:"Inbound Transfer", 
    4:"Outbound Transfer", 5:"Overdraft Fee", 6:"Payment", 7:"Account Opened", 8:"Account Closed"}

export class DBTransaction {
    id: number;
    transactionTypeId: TransactionType;
    accountId: number;
    associatedAccountId: number;
    ammount: number;
    timeStamp: string;
    
    public static NameFor(t: TransactionType){
        return TransactionTypeNames[t];
    }
}

export class Transaction extends DBTransaction {
    accountName: null|string;
    associatedAccountName: null|string;
}