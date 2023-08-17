const input = require("readline-sync");

class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("Transaction successful!");
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log("Transaction successful!");
    } else {
      console.log("Insufficient balance.");
    }
  }
}

const accounts = [];

function addAccount(accountNumber, accountHolder, initialBalance) {
  const newAccount = new BankAccount(
    accountNumber,
    accountHolder,
    initialBalance
  );
  accounts.push(newAccount);
  console.log("Account added successfully!");
}

function displayAccountInfo() {
  if (accounts.length === 0) {
    console.log("No accounts available.");
  } else {
    console.log("Account Information:");
    accounts.forEach((account, index) => {
      console.log(`[${index}] Account Number: ${account.accountNumber} | Account Holder: ${account.accountHolder} | Balance: ${account.balance}`);
    });
  }
}

function displayBankMenu() {
  console.log("Welcome to the Bank Account Management System!\n");

  while (true) {
    console.log("Menu:");
    console.log("1. Add an account");
    console.log("2. Deposit/Withdraw");
    console.log("3. Display account information");
    console.log("4. Exit\n");

    const choice = input.question("Please enter your choice: ");

    if (choice === "1") {
      const accountNumber = input.question("Enter account number: ");
      const accountHolder = input.question("Enter account holder's name: ");
      const initialBalance = parseFloat(
        input.question("Enter initial balance: ")
      );
      addAccount(accountNumber, accountHolder, initialBalance);
    } else if (choice === "2") {
      const accountIndex = parseInt(input.question("Enter account index: "));
      const account = accounts[accountIndex];
      if (account) {
        const action = input.question("Enter action (deposit/withdraw): ");
        const amount = parseFloat(input.question("Enter amount: "));
        if (action === "deposit") {
          account.deposit(amount);
        } else if (action === "withdraw") {
          account.withdraw(amount);
        } else {
          console.log("Invalid action.");
        }
      } else {
        console.log("Invalid account index.");
      }
    } else if (choice === "3") {
      displayAccountInfo();
    } else if (choice === "4") {
      console.log(
        "Thank you for using the Bank Account Management System. Goodbye!"
      );
      return;
    } else {
      console.log("Invalid choice. Please try again.");
    }

    console.log("");
  }
}

// Call the main function to start the program
displayBankMenu();