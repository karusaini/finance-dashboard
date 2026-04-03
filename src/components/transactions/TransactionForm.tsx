"use client";

import { useState } from "react";
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

export default function TransactionForm({ onClose }: { onClose: () => void }) {
  const { addTransaction } = useTransactionStore();

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = () => {
    if (!amount || !category) return;

    addTransaction({
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category,
      type: type as "income" | "expense",
    });

    onClose(); // modal close
  };

  return (
    <div className="space-y-4">
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

      <Select value={type} onValueChange={setType}>
        <SelectTrigger>
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="income">Income</SelectItem>
          <SelectItem value="expense">Expense</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={handleSubmit} className="w-full">
        Add Transaction
      </Button>
    </div>
  );
}
