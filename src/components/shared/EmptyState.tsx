import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title?: string;
  description?: string;
};

export default function EmptyState({
  title = "No data found",
  description = "Try adjusting your filters or add new data.",
}: Props) {
  return (
    <Card className="mt-4">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        {/* Icon */}
        <div className="text-4xl mb-3">📭</div>

        {/* Title */}
        <h2 className="text-lg font-semibold">{title}</h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}
