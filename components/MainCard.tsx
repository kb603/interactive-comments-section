import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Reply } from "lucide-react";
import Image from "next/image";

interface CommentProps {
  username: string;
  timeAgo: string;
  content: string;
  score: number;
  avatarUrl: string;
}

export default function MainComment({
  username = "amyrobson",
  timeAgo = "1 month ago",
  content = "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  score = 12,
  avatarUrl = "/placeholder.svg?height=32&width=32",
}: CommentProps) {
  return (
    <Card className="p-6 max-w-3xl">
      <div className="flex gap-6">
        {/* Vote Counter - Mobile view will be stacked horizontally */}
        <div className="hidden md:flex flex-col items-center gap-2 bg-muted/50 rounded-lg p-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronUp className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium text-primary">{score}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Comment Content */}
        <div className="flex-1 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={avatarUrl}
                alt={`${username}'s avatar`}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex items-center gap-2">
                <span className="font-medium">{username}</span>
                <span className="text-muted-foreground">{timeAgo}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center gap-2"
            >
              <Reply className="h-4 w-4" />
              Reply
            </Button>
          </div>

          {/* Comment Text */}
          <p className="text-muted-foreground leading-relaxed">{content}</p>

          {/* Mobile Actions */}
          <div className="flex items-center justify-between md:hidden">
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronUp className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium text-primary">{score}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              <Reply className="h-4 w-4" />
              Reply
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
