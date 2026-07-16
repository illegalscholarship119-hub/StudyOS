function OrbitBar() {
  const subjects = [
    { name: "DSA", color: "bg-teal-200" },
    { name: "Java", color: "bg-orange-200" },
    { name: "DBMS", color: "bg-yellow-200" },
    { name: "AWS", color: "bg-purple-200" },
    { name: "+", color: "bg-gray-200" },
  ];

  return (
    <div className="flex gap-8 px-8 py-6">
      {subjects.map((subject) => (
        <div key={subject.name} className="flex flex-col items-center gap-2">
          <button
            className={`w-20 h-20 rounded-full ${subject.color} border-2 border-transparent hover:border-blue-500 transition duration-300`}
          >
          </button>

          <p className="text-sm font-medium">{subject.name}</p>
        </div>
      ))}
    </div>
  );
}

export default OrbitBar;