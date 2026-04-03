"use client";

import { useTransactionStore } from "@/store/useTransactionStore";
import { getTopCategory, getSummary } from "@/lib/calculations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Insights() {
  const { transactions } = useTransactionStore();

  const topCategory = getTopCategory(transactions);
  const { income, expenses } = getSummary(transactions);

  const savings = income - expenses;

  const savingRate = income > 0 ? ((savings / income) * 100).toFixed(1) : 0;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Insights</h1>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Top Category */}
        <Card>
          <CardHeader>
            <CardTitle>Top Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{topCategory || "No data"}</p>
          </CardContent>
        </Card>

        {/* Savings */}
        <Card>
          <CardHeader>
            <CardTitle>Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">₹{savings}</p>
          </CardContent>
        </Card>

        {/* Saving Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Saving Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{savingRate}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Extra Insight Text */}
      <Card>
        <CardHeader>
          <CardTitle>Observation</CardTitle>
        </CardHeader>
        <CardContent>
          {topCategory ? (
            <p className="text-sm text-muted-foreground">
              You are spending most on <b>{topCategory}</b>. Consider optimizing
              this category to improve savings.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Add transactions to see insights.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
