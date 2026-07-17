import Button from "../Button/Button";

type TopicHeaderProps = {
  subject: string;
  title: string;
  description: string;
  notes: number;
  progress: number;
  color: string;
};

function TopicHeader({
  subject,
  title,
  description,
  notes,
  progress,
  color,
}: TopicHeaderProps) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-10">
      <span
        className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${color}`}
      >
        {subject}
      </span>

      <h1 className="mt-6 text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg text-gray-500">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-10">
        <div>
          <p className="text-sm text-gray-500">
            Notes
          </p>

          <h2 className="text-3xl font-bold">
            {notes}
          </h2>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Progress
          </p>

          <h2 className="text-3xl font-bold">
            {progress}%
          </h2>
        </div>
      </div>

      <div className="mt-8 h-3 overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-8">
        <Button>
          Continue Learning
        </Button>
      </div>
    </section>
  );
}

export default TopicHeader;