"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  data: {
    category: string;
    value: number;
  }[];
};

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

export default function CategoryChart({ data }: Props) {
  return (
    <Card className="backdrop-blur bg-white/70 dark:bg-gray-800/60 border shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Spending Breakdown
        </CardTitle>
      </CardHeader>

      <CardContent className="h-62.5 sm:h-75 md:h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              cornerRadius={8}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: 8,
                border: "none",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
