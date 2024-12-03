import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function MainCard() {
  return (
    <Card className="mx-auto mt-8 max-w-3xl p-4 md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div className="flex flex-row items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronUp className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">12</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                <AvatarImage src="/placeholder.svg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold sm:text-base">amyrobson</p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  1 month ago
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              Reply
            </Button>
          </div>
          <p className="text-sm text-muted-foreground sm:text-base">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You&apos;ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
    </Card>
  );
}
