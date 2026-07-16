function CaptureDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-full px-6 py-4 flex items-center gap-6 border">

      <button className="text-2xl hover:scale-110 transition">
        📋
      </button>

      <button className="text-2xl hover:scale-110 transition">
        📷
      </button>

      <button className="w-16 h-16 rounded-full bg-blue-600 text-white text-3xl hover:scale-105 transition">
        +
      </button>

      <button className="text-2xl hover:scale-110 transition">
        📄
      </button>

      <button className="text-2xl hover:scale-110 transition">
        🎥
      </button>

    </div>
  );
}

export default CaptureDock;