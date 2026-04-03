"use client";

import { useState, useEffect } from "react";
import { useTransactionStore } from "@/store/useTransactionStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Transaction } from "@/types/transaction";

type Props = {
  onClose: () => void;
  tx?: Transaction; // ✅ Optional prop for editing
};

export default function TransactionForm({ onClose, tx }: Props) {
  const { addTransaction, updateTransaction } = useTransactionStore();

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  // ✅ Pre-fill form if tx exists (edit mode)
  useEffect(() => {
    if (tx) {
      setAmount(tx.amount.toString());
      setCategory(tx.category);
      setType(tx.type);
    }
  }, [tx]);

  const handleSubmit = () => {
    if (!amount || !category) return;

    if (tx) {
      // Edit existing transaction
      updateTransaction({
        ...tx,
        amount: Number(amount),
        category,
        type: type as "income" | "expense",
      });
    } else {
      // Add new transaction
      addTransaction({
        id: Date.now().toString(),
        date: new Date().toISOString().split("T")[0],
        amount: Number(amount),
        category,
        type: type as "income" | "expense",
      });
    }

    onClose(); // close modal
  };

  return (
    <div className="space-y-4 p-4 sm:p-6 bg-background rounded-lg shadow-md">
      <Input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <Select value={type} onValueChange={(val) => val && setType(val)}>
        <SelectTrigger className="w-full sm:w-40 h-10 rounded-lg">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="income">Income</SelectItem>
          <SelectItem value="expense">Expense</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={handleSubmit} className="w-full">
        {tx ? "Update Transaction" : "Add Transaction"}
      </Button>
    </div>
  );
}
