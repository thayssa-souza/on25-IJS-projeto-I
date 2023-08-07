const { Account } = require('./Account')

let account1, account2;

beforeEach(() => {
    account1 = new Account();
    account1.balance = 100;

    account2 = new Account();
    account2.balance = 10;
})

describe("Check if deposit function returns the correct balance", () => {
    it("Should return false if amount <= 0", () => {
        let depositAmount = -10;
        let output = false;

        expect(account1.deposit(depositAmount)).toBe(output);
    });
    it("Should return the new balance (balance + amount) when amount > 0", () => {
        let depositAmount = 50;
        let output = 150;

        expect(account1.deposit(depositAmount)).toBe(output);
    });
});

describe("Check if withdrawal function returns the correct balance", () => {
    it("Should return false if amount <= 0", () => {
        let withdrawalAmount = -20;
        let output = false;

        expect(account1.withdrawal(withdrawalAmount)).toBe(output);
    });
    it("Should return the new balance (balance - amount) when amount > 0 and amount is lower than actual balance", () => {
        let withdrawalAmount = 70;
        let output = 30;

        expect(account1.withdrawal(withdrawalAmount)).toBe(output);
    });
    it("Should return false if amount is bigger than actual balance", () => {
        let withdrawalAmount = 110;
        let output = false;

        expect(account1.withdrawal(withdrawalAmount)).toBe(output);
    });
});