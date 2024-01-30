class Users {
    name: string
    balance: number

    constructor(n: string, b: number) {
        this.name = n
        this.balance = b
    }
}

const user1 = new Users('marcos', 10)
console.log(user1)