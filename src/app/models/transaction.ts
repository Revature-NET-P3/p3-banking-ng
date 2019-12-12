export interface ITransaction {
    Id: number
    Token: any
    AccountNumber: number
    toAccountNumber: number
    AccountType: number
    toAccountType: number
    TransactionType: string
    CurrencyType: string
    TimeStamp: Date
    Amount: number
}
