import { useNavigate } from "react-router-dom";

type LessonCardProps = {
  slug: string;
  title: string;
  duration: string;
  completed: boolean;
};

function LessonCard({
  slug,
  title,
  duration,
  completed,
}: LessonCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/lesson/${slug}`)}
      className="
        flex items-center justify-between
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <div>
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-gray-500">
          {duration}
        </p>
      </div>

      <span
        className={`rounded-full px-4 py-2 text-sm font-medium ${
          completed
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {completed ? "Completed" : "Start"}
      </span>
    </div>
  );
}

export default LessonCard;