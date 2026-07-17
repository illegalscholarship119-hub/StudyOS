import { Search, Bell, UserCircle } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        {/* Logo */}
        <h1 className="text-4xl font-bold tracking-tight">
          StudyOS
        </h1>

        {/* Search */}
        <div className="relative w-[500px]">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search everything..."
            className="
              h-14
              w-full
              rounded-full
              border
              border-gray-200
              bg-gray-50
              pl-14
              pr-5
              text-lg
              outline-none
              transition
              focus:border-blue-500
              focus:bg-white
            "
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="rounded-full p-3 hover:bg-gray-100 transition">
            <Bell size={22} />
          </button>

          <button className="rounded-full p-2 hover:bg-gray-100 transition">
            <UserCircle size={34} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;