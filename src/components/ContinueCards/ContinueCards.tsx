import { continueStudy } from "../../data/continue";

function ContinueCards() {
  return (
    <section className="px-8 mt-10">
      <h2 className="text-2xl font-bold mb-5">
        Continue Studying
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {continueStudy.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {card.subject}
            </span>

            <h3 className="text-3xl font-bold mt-5">
              {card.title}
            </h3>

            <p className="text-gray-500 mt-3">
              {card.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContinueCards;