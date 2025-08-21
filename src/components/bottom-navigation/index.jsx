import { Link, useLocation } from "react-router-dom";

import ShopBasketIcon from "../icons/shop-basket";
import DocumentCheckIcon from "../icons/selected";
import UserSquareIcon from "../icons/profile";
import HomeIcon from "../icons/home";

const NavigationBottom = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Главная", Icon: HomeIcon },
    { to: "/shop-basket", label: "Корзина", Icon: ShopBasketIcon },
    { to: "/selected", label: "Избранное", Icon: DocumentCheckIcon },
    { to: "/profile", label: "Профиль", Icon: UserSquareIcon },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-t-gray-200 flex justify-around py-2 font-gilroy rounded-t-xl shadow-sm z-9999">
      {links.map(({ to, label, Icon }) => {
        const isActive = location.pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className={`flex flex-col justify-center items-center transition-all duration-200 ${
              isActive ? "text-[#0256BA]" : "text-gray-500 hover:text-[#0256BA]"
            }`}
          >
            <div
              className={`flex items-center justify-center p-2 rounded-xl ${
                isActive ? "bg-blue-50 shadow-sm" : ""
              }`}
            >
              <Icon color={isActive ? "#0256BA" : "black"} />
            </div>
            <span
              className={`text-xs mt-1 ${
                isActive ? "font-semibold" : "font-normal"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationBottom;
