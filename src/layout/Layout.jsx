import NavigationBottom from "../components/bottom-navigation";
import SmartImage from "../components/image";
import WindowMaster from "../assets/images/window-master.png";
import VerticalMenu from "../assets/icons/menu-vertical.svg";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="w-full shadow-sm rounded-b-xl bg-white">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <SmartImage
              src={WindowMaster}
              alt="window-master"
              width="30px"
              height="30px"
            />
            <h1 className="text-xl font-bold text-[#007AFF]">Оконный мастер</h1>
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

      {/* Page Content */}
      <main className="flex-1 ">{children}</main>

      {/* Bottom Navigation */}
      <NavigationBottom />
    </div>
  );
}
