import { Transaction } from "@/types/transaction";

// ✅ Summary
export const getSummary = (transactions: Transaction[]) => {
  let income = 0;
  let expenses = 0;

  transactions.forEach((tx) => {
    if (tx.type === "income") income += tx.amount;
    else expenses += tx.amount;
  });

  return {
    balance: income - expenses,
    income,
    expenses,
  };
};

// ✅ Top Category
export const getTopCategory = (transactions: Transaction[]) => {
  const map: Record<string, number> = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      map[tx.category] = (map[tx.category] || 0) + tx.amount;
    }
  });

  if (Object.keys(map).length === 0) return "No data";

  return Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
};

// ✅ Monthly Expense
export const getMonthlyExpense = (transactions: Transaction[]) => {
  const map: Record<string, number> = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      const month = tx.date.slice(0, 7);
      map[month] = (map[month] || 0) + tx.amount;
    }
  });

  return map;
};

// ✅ Category Breakdown
export const getCategoryBreakdown = (transactions: Transaction[]) => {
  const map: Record<string, number> = {};

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      map[tx.category] = (map[tx.category] || 0) + tx.amount;
    }
  });

  return Object.entries(map).map(([category, value]) => ({
    category,
    value,
  }));
};

export const getBalanceTrend = (
  transactions: { type: string; amount: number; date: any }[],
) => {
  let balance = 0;

  return transactions.map((tx: { type: string; amount: number; date: any }) => {
    if (tx.type === "income") balance += tx.amount;
    else balance -= tx.amount;

    return {
      date: tx.date,
      balance,
    };
  });
};
