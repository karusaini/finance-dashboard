"use client";

import { useState } from "react";
import TransactionTable from "@/components/transactions/TransactionTable";
import TransactionFilters from "@/components/transactions/TransactionFilters";
import { useTransactionStore } from "@/store/useTransactionStore";
import { useFilters } from "@/hooks/useFilters";
import EmptyState from "@/components/shared/EmptyState";
import AddTransactionModal from "@/components/transactions/AddTransactionModal";

export default function TransactionsPage() {
  const { transactions } = useTransactionStore();

  const { role } = useTransactionStore();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredData = useFilters(
    transactions,
    search,
    typeFilter,
    categoryFilter,
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Transactions</h1>

        {role === "admin" && <AddTransactionModal />}
      </div>

      {/* Filters */}
      <TransactionFilters
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      {/* Table / Empty */}
      {filteredData.length === 0 ? (
        <EmptyState />
      ) : (
        <TransactionTable transactions={filteredData} />
      )}
    </div>
  );
}
