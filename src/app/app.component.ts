import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = retrieveUser(); // Exercise Idea (?): Make interface for 'userData' type
  transactions = null;
  selectedAccount = null;
  formatAccountType = (type: string) => {
    switch (type) {
      case 'chequing':
        return 'Chequing Account';
      case 'savings':
        return 'Savings Account';
      case 'credit_card':
        return 'Credit Card';
      default:
        return '';
    }
  }
  getTransactions = (id: string, name: string) => {
    this.selectedAccount = name;
    this.transactions = transactionData[id];
  }
}

const transactionData = {
  cheq4567: [
    {
      description: 'Payroll deposit',
      date: '2019-01-01',
      amount: '1987',
      type: 'salary'
    },
    {
      description: 'Fido mobile',
      date: '2019-01-03',
      amount: '-65.99',
      type: 'bill'
    },
    {
      description: 'Hydro bill',
      date: '2019-01-10',
      amount: '-123.11',
      type: 'bill'
    },
    {
      description: 'No Frills',
      date: '2019-01-12',
      amount: '-55.65',
      type: 'grocery'
    },
    {
      description: 'Petro-Canada',
      date: '2019-01-12',
      amount: '-39',
      type: 'gas'
    },
    {
      description: 'Lablaws',
      date: '2019-01-13',
      amount: '-13.96',
      type: 'grocery'
    },
    {
      description: 'American Eagle',
      date: '2019-01-13',
      amount: '-33.40',
      type: 'clothing'
    },
    {
      description: 'Payroll deposit',
      date: '2019-01-15',
      amount: '1987',
      type: 'salary'
    },
    {
      description: 'No Frills',
      date: '2019-01-21',
      amount: '-25.23',
      type: 'grocery'
    },
    {
      description: 'Petro-Canada',
      date: '2019-01-22',
      amount: '-34',
      type: 'gas'
    },
    {
      description: 'Petro-Canada',
      date: '2019-01-28',
      amount: '-31',
      type: 'gas'
    }
  ],
  sav1234: [
    {
      description: 'Deposit',
      date: '2019-01-02',
      amount: '1000',
      type: 'deposit'
    },
    {
      description: 'Deposit',
      date: '2019-01-16',
      amount: '1000',
      type: 'deposit'
    },
    {
      description: 'Withdrawl',
      date: '2019-01-28',
      amount: '-500',
      type: 'withdrawl'
    }

  ],
  cc98765: [
    {
      description: 'Roots',
      date: '2019-01-08',
      amount: '-101.20',
      type: 'clothing'
    },
    {
      description: 'Lablaws',
      date: '2019-01-13',
      amount: '-33.36',
      type: 'grocery'
    },
    {
      description: 'Mark\s Warehouse',
      date: '2019-01-19',
      amount: '-11.16',
      type: 'clothing'
    },
    {
      description: 'The GAP',
      date: '2019-01-22',
      amount: '-52.86',
      type: 'clothing'
    }
  ],
  cc33333: [
    {
      description: 'Jack Astors',
      date: '2019-01-23',
      amount: '-88',
      type: 'restaurant'
    },
    {
      description: 'Leon\'s',
      date: '2019-01-24',
      amount: '-120.99',
      type: 'furniture'
    }
  ]
};

function retrieveUser() {
  return {
    first_name: 'John',
    last_name: 'Doe',
    dob: '1988-02-15',
    phone: '416-555-1234', // Exercise Idea (?): Make phone without formatting and ask for a formatting function
    address: '123 Silver Lane, Toronto, ON, M5U 2B2, Canada',
    email: 'john.doe@email.com',
    accounts: [ // Exercise Idea (?): Make interface for 'account' type
      {
        id: 'cheq4567',
        type: 'chequing',
        name: 'Chequing Limitless',
        balance: '1253.26'
      },
      {
        id: 'sav1234',
        type: 'savings',
        name: 'Savings Plus',
        balance: '520.00',
      },
      {
        id: 'cc98765',
        type: 'credit_card',
        name: 'Gold Visa',
        balance: '230.05',
      },
      {
        id: 'cc33333',
        type: 'credit_card',
        name: 'Platinum Visa',
        balance: '100.11',
      }
    ]
  };
}
