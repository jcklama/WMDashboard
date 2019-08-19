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

  pieChartLabels: [];
  pieChartData: [];
  pieChartOptions = {
    legend: {
      position: 'right'
    }
  };
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
    let pieData = {
      pieChartLabels: null,
      pieChartData: null
    };
    const data = transactionData[id];
    this.selectedAccount = name;
    pieData = getPieData(data);
    console.log(pieData);
    this.pieChartLabels = pieData.pieChartLabels;
    this.pieChartData = pieData.pieChartData;
    this.transactions = data;
  }
}

const transactionData = {
  cheq4567: [
    {
      description: 'Payroll deposit',
      date: '2019-01-01',
      amount: '1987',
      type: 'Salary'
    },
    {
      description: 'Fido mobile',
      date: '2019-01-03',
      amount: '-65.99',
      type: 'Bill'
    },
    {
      description: 'Hydro bill',
      date: '2019-01-10',
      amount: '-123.11',
      type: 'Bill'
    },
    {
      description: 'No Frills',
      date: '2019-01-12',
      amount: '-55.65',
      type: 'Grocery'
    },
    {
      description: 'Petro-Canada',
      date: '2019-01-12',
      amount: '-39',
      type: 'Gas'
    },
    {
      description: 'Lablaws',
      date: '2019-01-13',
      amount: '-13.96',
      type: 'Grocery'
    },
    {
      description: 'American Eagle',
      date: '2019-01-13',
      amount: '-33.40',
      type: 'Clothing'
    },
    {
      description: 'Payroll deposit',
      date: '2019-01-15',
      amount: '1987',
      type: 'Salary'
    },
    {
      description: 'No Frills',
      date: '2019-01-21',
      amount: '-25.23',
      type: 'Grocery'
    },
    {
      description: 'Petro-Canada',
      date: '2019-01-22',
      amount: '-34',
      type: 'Gas'
    },
    {
      description: 'Petro-Canada',
      date: '2019-01-28',
      amount: '-31',
      type: 'Gas'
    }
  ],
  sav1234: [
    {
      description: 'Deposit',
      date: '2019-01-02',
      amount: '1000',
      type: 'Deposit'
    },
    {
      description: 'Deposit',
      date: '2019-01-16',
      amount: '1000',
      type: 'Deposit'
    },
    {
      description: 'Withdrawl',
      date: '2019-01-28',
      amount: '-500',
      type: 'Withdrawl'
    }

  ],
  cc98765: [
    {
      description: 'Roots',
      date: '2019-01-08',
      amount: '-101.20',
      type: 'Clothing'
    },
    {
      description: 'Lablaws',
      date: '2019-01-13',
      amount: '-33.36',
      type: 'Grocery'
    },
    {
      description: 'Mark\s Warehouse',
      date: '2019-01-19',
      amount: '-11.16',
      type: 'Clothing'
    },
    {
      description: 'The GAP',
      date: '2019-01-22',
      amount: '-52.86',
      type: 'Clothing'
    }
  ],
  cc33333: [
    {
      description: 'Jack Astors',
      date: '2019-01-23',
      amount: '-88',
      type: 'Restaurant'
    },
    {
      description: 'Leon\'s',
      date: '2019-01-24',
      amount: '-120.99',
      type: 'Furniture'
    }
  ]
};

function getPieData(transactions) {
  const data = {};
  transactions.forEach((t) => {
    if (Number(t.amount) < 0) {
      if (!data[t.type]) {
        data[t.type] = Math.abs(Number(t.amount));
      } else {
        data[t.type] += Math.abs(Number(t.amount));
      }
    }
  });
  return {
    pieChartLabels: Object.keys(data),
    pieChartData: Object.values(data)
  };
}

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

