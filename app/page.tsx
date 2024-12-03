import MainCard from "@/components/MainCard";
import SubCard from "@/components/SubCard";
import CommentSection from "@/components/CommentSection";

export default function Layout() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-4 p-4">
      {/* Main comments container */}
      <div className="space-y-4">
        {/* Comment Card - You can replace this with your CommentCard component */}

        <MainCard />

        {/* Nested replies container */}
        <div className="ml-8 space-y-4 border-l-2 border-gray-200 pl-8">
          {/* SubComment components - You can replace these with your SubComment component */}

          {/* Your existing SubComment component */}
          <SubCard />
          <SubCard />
        </div>
      </div>

      {/* Comment input section */}
      <CommentSection />
    </div>
  );
}
