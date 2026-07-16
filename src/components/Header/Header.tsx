function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="flex items-center gap-3 text-4xl font-bold tracking-tight">
          📚
          <span>StudyOS</span>
        </h1>

        {/* Search */}
        <div className="w-[500px]">
          <input
            type="text"
            placeholder="Search everything..."
            className="
              w-full
              h-14
              rounded-full
              border
              border-gray-200
              bg-gray-50
              px-6
              text-lg
              outline-none
              transition-all
              duration-300
              focus:border-blue-500
              focus:bg-white
              focus:shadow-lg
            "
          />
        </div>

        {/* Profile */}
        <button
          className="
            h-14
            w-14
            rounded-full
            bg-blue-500
            text-white
            font-semibold
            shadow-md
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
          "
        >
          AP
        </button>

      </div>
    </header>
  );
}

export default Header;