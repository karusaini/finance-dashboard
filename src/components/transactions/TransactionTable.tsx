"use client";

import { useTransactionStore } from "@/store/useTransactionStore";
import EditTransactionModal from "@/components/transactions/EditTransactionModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type Props = {
  transactions: any[];
};

export default function TransactionTable({ transactions }: Props) {
  const { role, deleteTransaction } = useTransactionStore();

  return (
    <div className="mt-4 border rounded-lg p-4 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Type</TableHead>
            {role === "admin" && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={role === "admin" ? 5 : 4}
                className="text-center text-sm text-muted-foreground py-4"
              >
                No transactions found
              </TableCell>
            </TableRow>
          ) : (
            transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>{tx.date}</TableCell>
                <TableCell>₹{tx.amount}</TableCell>
                <TableCell>{tx.category}</TableCell>
                <TableCell>{tx.type}</TableCell>

                {role === "admin" && (
                  <TableCell className="flex gap-2">
                    {/* Edit Modal */}
                    <EditTransactionModal tx={tx} />

                    {/* Delete Button */}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        if (
                          confirm(
                            "Are you sure you want to delete this transaction?",
                          )
                        ) {
                          deleteTransaction(tx.id);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
