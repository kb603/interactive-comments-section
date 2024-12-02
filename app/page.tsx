import MainCard from "@/components/MainCard";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl px-4">
        {/* Comments Section */}
        <MainCard
          username="JohnDoe"
          timeAgo="2 hours ago"
          content="This is a comment."
          score={12}
          avatarUrl="/path/to/avatar.jpg"
        />
      </div>
    </div>
  );
}
