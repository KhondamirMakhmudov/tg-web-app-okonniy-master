import NavigationBottom from "../components/bottom-navigation";
import SmartImage from "../components/image";
import Layout from "../layout/Layout";
import GoBack from "../assets/icons/go-back.svg";

import WindowImg from "../assets/images/pvh-okna.jpg";
import AluminumImg from "../assets/images/aluminum.jpg";
import SliderImg from "../assets/images/bkf_max.png";
import FacadeImg from "../assets/images/bkh65.png";
import DoorImg from "../assets/images/door.jpg";

import { useNavigate } from "react-router-dom";

export default function Catalog() {
  const navigate = useNavigate();

  const items = [
    { title: "ПВХ ОКНА", bg: WindowImg },
    { title: "АЛЮМИНИЕВЫЕ ОКНА", bg: AluminumImg },
    { title: "РАЗДВИЖНЫЕ СИСТЕМЫ", bg: SliderImg },
    { title: "ФАСАДНЫЕ СИСТЕМЫ", bg: FacadeImg },
    { title: "ДВЕРИ", bg: DoorImg },
  ];
  return (
    <Layout>
      <div className="min-h-screen  bg-white border-t border-t-gray-200 mt-[20px] rounded-t-xl">
        <button
          className="p-2 border rounded-full ml-[10px] mt-[20px] active:scale-95 scale-100"
          onClick={() => navigate(-1)}
        >
          <SmartImage
            src={GoBack}
            alt={"go-back"}
            width={"15px"}
            height={"15px"}
          />
        </button>
        <div className="grid grid-cols-2 gap-4 p-4">
          {items.map((item, i) => (
            <button
              key={i}
              className="relative h-28 flex items-center justify-center text-center text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition overflow-hidden"
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Title */}
              <span className="relative z-10 px-2 py-1 rounded-md">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        <NavigationBottom />
      </div>
    </Layout>
  );
}
