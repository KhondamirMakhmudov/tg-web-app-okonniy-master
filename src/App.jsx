import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/header";

function App() {
  const tg = useTelegram();

  useEffect(() => {
    if (!tg) return;

    tg.MainButton.setText("Tasdiqlash ✅");
    tg.MainButton.show();

    tg.MainButton.onClick(() => {
      tg.sendData("User tugmani bosdi! 🚀");
    });

    return () => {
      tg.MainButton.offClick(() => {});
    };
  }, [tg]);

  return (
    <div className="bg-gray-200">
      <Header />
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar */}
        <header className="w-full shadow-md bg-black">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
            <nav className="space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 bg-green-400 px-2 py-1 rounded"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 bg-green-400 px-2 py-1 rounded"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 bg-green-400 px-2 py-1 rounded"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
          <h2 className="text-3xl font-semibold mb-6">Welcome to my app 👋</h2>
          <p className="text-gray-600">
            Bu yerda sening asosiy interfeysing joylashadi. Keyin componentlarga
            bo‘lamiz (cards, forms, buttons).
          </p>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 py-6 mt-auto">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
