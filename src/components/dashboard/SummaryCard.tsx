"use client";

import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  value: number;
  icon?: React.ReactNode;
};

export default function SummaryCard({ title, value, icon }: Props) {
  return (
    <Card className="relative overflow-hidden backdrop-blur bg-white/70 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl">
      {/* Gradient top line */}

      <CardContent className="p-4 flex items-center justify-between">
        {/* Text */}
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h2 className="text-2xl font-bold mt-1">₹{value}</h2>
        </div>

        {/* Icon */}
        <div className="text-2xl">{icon}</div>
      </CardContent>
    </Card>
  );
}
