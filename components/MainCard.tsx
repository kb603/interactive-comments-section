import { Card } from "@/components/ui/card";
import UpVote from "./UpVote";
import CommentSection from "./CommentSection";

export default function MainCard() {
  return (
    <Card className="mx-auto mt-8 max-w-3xl p-6">
      <div className="flex flex-col gap-6 md:flex-row">
        <UpVote />
        <CommentSection />
      </div>
    </Card>
  );
}
