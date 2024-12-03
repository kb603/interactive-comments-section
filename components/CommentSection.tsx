import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CommentSection() {
  return (
    <Card className="mt-4 p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
        <Image
          alt="Current user avatar"
          className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
          height="40"
          src="/placeholder.svg?height=40&width=40"
          width="40"
        />
        <div className="flex-1">
          <textarea
            className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
            placeholder="Add a comment..."
          />
        </div>
      </div>
      <Button className="mt-4 w-full sm:w-auto">SEND</Button>
    </Card>
  );
}
