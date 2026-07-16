function CaptureDock() {
  const actions = [
    { icon: "📋", label: "Paste" },
    { icon: "📷", label: "Screenshot" },
    { icon: "+", label: "Add", primary: true },
    { icon: "📄", label: "PDF" },
    { icon: "🎥", label: "Video" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-2xl">

        {actions.map((action) => (
          <button
            key={action.label}
            title={action.label}
            className={
              action.primary
                ? "flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-3xl text-white shadow-lg transition hover:scale-110"
                : "flex h-12 w-12 items-center justify-center rounded-full text-2xl transition hover:bg-gray-100 hover:scale-105"
            }
          >
            {action.icon}
          </button>
        ))}

      </div>
    </div>
  );
}

export default CaptureDock;