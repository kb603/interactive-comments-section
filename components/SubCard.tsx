import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function SubCard() {
  return (
    <Card className="mt-4 max-w-xl p-4 sm:ml-20 sm:p-6">
      <div className="flex flex-col gap-4 sm:ml-10 sm:flex-row sm:gap-6">
        <div className="flex flex-row items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronUp className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">5</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                <AvatarImage src="/placeholder.svg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xs font-semibold sm:text-sm">ramsesmiron</p>
                <p className="text-xs text-muted-foreground">1 week ago</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              Reply
            </Button>
          </div>
          <p className="text-xs text-muted-foreground sm:text-sm">
            I couldn&apos;t agree more with this. Everything looks incredible.
            Great job!
          </p>
        </div>
      </div>
    </Card>
  );
}
