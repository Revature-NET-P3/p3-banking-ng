export abstract class Transaction {
    Id: number;
    TransactionTypeId: number;
    AccountId: number;
    AssociatedAccountId: number;
    Ammount: number;
    TimeStamp: Date;
}

// export enum TransactionType {
//     Withdraw = 1,
//     Deposit,
//     TransferTo,
//     TransferFrom,
//     Overdraft,
//     Pay,
//     Open,
//     Close,
// }

/*
    Transaction Types
    1: Withdraw
    2: Deposit
    3: TransferTo
    4: TransferFrom
    5: Overdraft
    6: Pay
    7: Open
    8: Close
*/