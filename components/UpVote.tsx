import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function StaticUpVote() {
  return (
    <Card className="ml-5 flex w-12 flex-col items-center justify-between bg-muted/50 p-2">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        aria-label="Upvote"
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
      <span className="text-sm font-medium text-primary">10</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        aria-label="Downvote"
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </Card>
  );
}
