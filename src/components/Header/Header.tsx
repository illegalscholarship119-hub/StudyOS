function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b bg-white">
      <h1 className="text-3xl font-bold text-blue-600">
        📚 StudyOS
      </h1>

      <input
        type="text"
        placeholder="Search everything..."
        className="w-96 rounded-full border px-5 py-3 outline-none focus:border-blue-500"
      />

      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
        AR
      </div>
    </header>
  );
}

export default Header;