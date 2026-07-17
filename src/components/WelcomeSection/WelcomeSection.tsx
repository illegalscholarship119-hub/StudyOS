import { topics } from "../../data/topics";

function WelcomeSection() {
  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) {
    greeting = "Good Morning 👋";
  } else if (hour < 17) {
    greeting = "Good Afternoon ☀️";
  }

  const totalTopics = topics.length;
  const completedTopics = topics.filter(
    (topic) => topic.progress === 100
  ).length;

  return (
    <section className="mx-auto max-w-7xl px-8 pt-8 pb-6">
      <h1 className="text-6xl font-bold tracking-tight text-gray-900">
        {greeting}
      </h1>

      <p className="mt-4 text-xl text-gray-500">
        Ready to continue your study journey?
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
          <p className="text-sm text-gray-500">Topics</p>
          <h3 className="mt-1 text-3xl font-bold">{totalTopics}</h3>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
          <p className="text-sm text-gray-500">Completed</p>
          <h3 className="mt-1 text-3xl font-bold">{completedTopics}</h3>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
          <p className="text-sm text-gray-500">Remaining</p>
          <h3 className="mt-1 text-3xl font-bold">
            {totalTopics - completedTopics}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;