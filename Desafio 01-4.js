const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }

function createTransaction(transactions) {
    if (transactions.type == "credit") {
        user.balance += transactions.value
    } else if(transactions.type == "debit") {
        user.balance -= transactions.value
    }
    user.transactions.push(transactions)
}

function getHigherTransactionByType(type) {
    let compare = 0
    id = 0

    for (let i =0; i < user.transactions.length; i++) {
        if (
            user.transactions[i].type == type &&
            user.transactions[i].value > compare
        ) {
            compare = user.transactions[i].value
            id = i
        }
    }
    return console.log(user.transactions[id])
}

function getAverageTransactionValue() {
    let sum = 0

    for (let i = 0; i < user.transactions.length; i++) {
        sum += user.transactions[i].value
    }
    const averageValue = sum / user.transactions.length

    return console.log(averageValue)
}

function getTransactionsCount() {
    let countCred = 0
    let countDebt = 0

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type == "credit") {
            countCred ++
        } else {
            countDebt++
        }
    }
    const credit = countCred
    const debit = countDebt

    return console.log(credit, debit)
}

createTransaction({type:"credit", value: 50},)
createTransaction({type:"credit", value: 120},)
createTransaction({type:"debit", value: 80},)
createTransaction({type:"debit", value: 30},)
createTransaction({type:"debit", value: 500},)

getAverageTransactionValue()

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")

getTransactionsCount()

console.log(user.balance)




