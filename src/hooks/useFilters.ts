import { Transaction } from "@/types/transaction";

export const useFilters = (
  transactions: Transaction[],
  search: string,
  typeFilter: string,
  categoryFilter: string,
) => {
  return transactions.filter((tx) => {
    const matchesSearch =
      tx.category.toLowerCase().includes(search.toLowerCase()) ||
      tx.amount.toString().includes(search);

    const matchesType = typeFilter === "all" || tx.type === typeFilter;

    const matchesCategory =
      categoryFilter === "all" || tx.category === categoryFilter;

    return matchesSearch && matchesType && matchesCategory;
  });
};
