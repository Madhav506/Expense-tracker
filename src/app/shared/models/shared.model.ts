export interface Expense {
    id: number;
    description: string;
    amount: number;
    date: Date;
    category: string;
  }

  export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    budgetLimit: number;
    balance: number;
  }

  