"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  data: {
    date: string;
    balance: number;
  }[];
};

export default function BalanceChart({ data }: Props) {
  return (
    <Card className="backdrop-blur bg-white/70 dark:bg-gray-800/60 border shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Balance Trend</CardTitle>
      </CardHeader>

      <CardContent className="h-62.5 sm:h-75 md:h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, bottom: 0, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: 8,
                border: "none",
              }}
            />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
