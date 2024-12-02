export default function CommentSection() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <p className="font-semibold">Username</p>
            <p className="text-sm text-gray-500">1 hour ago</p>
          </div>
        </div>
        <button className="text-blue-500 hover:text-blue-600">Reply</button>
      </div>
      <p className="text-gray-700">
        This is a sample comment. Replace this with actual comment content.
      </p>
    </div>
  );
}
