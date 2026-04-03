import { create } from "zustand";
import { Transaction } from "@/types/transaction";
import { transactions as mockData } from "@/data/transactions";

type Store = {
  transactions: Transaction[];
  role: "viewer" | "admin";

  setRole: (role: "viewer" | "admin") => void;

  addTransaction: (tx: Transaction) => void;
  updateTransaction: (tx: Transaction) => void;
  deleteTransaction: (id: string) => void;
};

export const useTransactionStore = create<Store>((set) => ({
  transactions: mockData,
  role: "viewer",

  setRole: (role) => set({ role }),

  addTransaction: (tx) =>
    set((state) => ({
      transactions: [...state.transactions, tx],
    })),

  // ✅ EDIT
  updateTransaction: (updatedTx) =>
    set((state) => ({
      transactions: state.transactions.map((tx) =>
        tx.id === updatedTx.id ? updatedTx : tx,
      ),
    })),

  // ✅ DELETE
  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((tx) => tx.id !== id),
    })),
}));
