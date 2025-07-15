function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-purple-700">Fake Job Detector</h1>
      <div className="space-x-4">
        <a href="#" className="text-purple-700" onClick={() => window.location.href = "/"}>Home</a>
        <a href="#" className="text-purple-700">About</a>
      </div>
    </nav>
  );
}
export default Navbar;
