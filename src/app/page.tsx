"use client";

import SummaryCard from "@/components/dashboard/SummaryCard";
import BalanceChart from "@/components/dashboard/BalanceChart";
import CategoryChart from "@/components/dashboard/CategoryChart";

import { useTransactionStore } from "@/store/useTransactionStore";
import {
  getSummary,
  getBalanceTrend,
  getCategoryBreakdown,
} from "@/lib/calculations";

export default function Dashboard() {
  const { transactions } = useTransactionStore();

  const { balance, income, expenses } = getSummary(transactions);
  const trendData = getBalanceTrend(transactions);
  const categoryData = getCategoryBreakdown(transactions);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expenses} />
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <BalanceChart data={trendData} />
        <CategoryChart data={categoryData} />
      </div>
    </div>
  );
}
