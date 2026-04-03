"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (val: string) => void;
  typeFilter: string;
  setTypeFilter: (val: string) => void;
  categoryFilter: string;
  setCategoryFilter: (val: string) => void;
};

export default function TransactionFilters({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  categoryFilter,
  setCategoryFilter,
}: Props) {
  return (
    <div className="mt-6 p-4 rounded-xl border backdrop-blur bg-white/70 dark:bg-gray-800/60 shadow-sm">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* 🔍 Search */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search by category or amount..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-10 rounded-lg"
          />
        </div>

        {/* 🧃 Type Filter */}
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-full md:w-40 h-10 rounded-lg">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="income">Income</SelectItem>
            <SelectItem value="expense">Expense</SelectItem>
          </SelectContent>
        </Select>

        {/* 📂 Category Filter */}
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-45 h-10 rounded-lg">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Food">Food</SelectItem>
            <SelectItem value="Salary">Salary</SelectItem>
            <SelectItem value="Freelance">Freelance</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
