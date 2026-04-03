"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransactionStore } from "@/store/useTransactionStore";

export function RoleSwitcher() {
  const { role, setRole } = useTransactionStore();

  return (
    <Select value={role} onValueChange={(val) => setRole(val as any)}>
      <SelectTrigger className="w-35">
        <SelectValue placeholder="Select Role" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="viewer">Viewer</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  );
}
