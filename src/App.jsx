import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/header";
import SmartImage from "./components/image";
import WindowMaster from "./assets/images/window-master.png";
import VerticalMenu from "./assets/icons/menu-vertical.svg";
import NavigationBottom from "./components/bottom-navigation";

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
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar */}
        <header className="w-full shadow-sm rounded-b-xl">
          <div className="flex justify-between items-center  px-6 py-4 ">
            <div className="flex items-center gap-2">
              <SmartImage
                src={WindowMaster}
                alt="window-master"
                width="30px"
                height="30px"
              />
              <h1 className="text-xl font-bold text-[#007AFF]">
                Оконный мастер
              </h1>
            </div>

            <SmartImage
              src={VerticalMenu}
              alt="vertical-menu"
              width="20px"
              height="20px"
              className="active:scale-90 scale-100 transition-all duration-200 cursor-pointer"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-6 py-4">
          <h2 className="text-lg font-semibold">Content bu yerda chiqadi</h2>
        </main>
        {/* Footer */}

        <NavigationBottom />
      </div>
    </div>
  );
}

export default App;
