function WelcomeSection() {
  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) {
    greeting = "Good Morning 👋";
  } else if (hour < 17) {
    greeting = "Good Afternoon ☀️";
  }

  return (
    <section className="max-w-7xl mx-auto px-8 pt-8 pb-6">
      <h1 className="text-6xl font-bold tracking-tight text-gray-900">
        {greeting}
      </h1>

      <p className="mt-4 text-xl text-gray-500">
        Ready to continue your study journey?
      </p>
    </section>
  );
}

export default WelcomeSection;