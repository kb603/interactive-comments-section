import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function SubCard() {
  return (
    <Card className="ml-20 mt-4 max-w-2xl p-6">
      <div className="ml-10 flex flex-col gap-6 md:flex-row">
        <div className="flex flex-row items-center gap-4 md:flex-col md:gap-2">
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
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">ramsesmiron</p>
                <p className="text-xs text-muted-foreground">1 week ago</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Reply
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            I couldn&apos;t agree more with this. Everything looks incredible.
            Great job!
          </p>
        </div>
      </div>
    </Card>
  );
}
