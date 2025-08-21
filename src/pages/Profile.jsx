import NavigationBottom from "../components/bottom-navigation";
import Layout from "../layout/Layout";
import Menu from "../assets/icons/menu.svg";
import Phone from "../assets/icons/phone.svg";
import Location from "../assets/icons/location.svg";
import Arrow from "../assets/icons/arrow.svg";
import Telegram from "../assets/icons/telegram.svg";
import Youtube from "../assets/icons/youtube.svg";
import Instagram from "../assets/icons/instagram.svg";
import SmartImage from "../components/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

// react-leaflet importlari
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Profile() {
  const [tab, setTab] = useState("");

  const handleTab = (newTab) => {
    setTab((prev) => (prev === newTab ? "" : newTab));
  };

  const position = [41.2995, 69.2401];

  return (
    <Layout>
      <div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-[50px] bg-white min-h-screen border border-gray-200 rounded-t-2xl shadow-lg"
        >
          {/* Menu */}
          <ul>
            <li
              className=" p-4 hover:bg-gray-200 border-b border-b-gray-200 transition-all duration-300 cursor-pointer"
              onClick={() => handleTab("catalog")}
            >
              <Link
                to={"/catalog"}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <SmartImage
                    src={Menu}
                    alt={"menu"}
                    width={"20px"}
                    height={"20px"}
                  />
                  <p className="text-lg">Каталог</p>
                </div>
                <SmartImage
                  src={Arrow}
                  alt={"arrow"}
                  width={"13px"}
                  height={"13px"}
                  className={`${
                    tab === "catalog" ? "rotate-180" : "rotate-90"
                  } transition-all duration-200`}
                />
              </Link>
            </li>

            <li
              className="hover:bg-gray-200 p-4 border-b border-b-gray-200 transition-all duration-300 cursor-pointer"
              onClick={() => handleTab("phone")}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <SmartImage
                    src={Phone}
                    alt={"Phone"}
                    width={"20px"}
                    height={"20px"}
                  />
                  <p className="text-lg">Контакты</p>
                </div>
                <SmartImage
                  src={Arrow}
                  alt={"arrow"}
                  width={"13px"}
                  height={"13px"}
                  className={`${
                    tab === "phone" ? "rotate-180" : "rotate-90"
                  } transition-all duration-200`}
                />
              </div>

              {tab === "phone" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pl-8 pr-2 flex flex-col gap-4 text-gray-700"
                >
                  {/* Telefon */}
                  <div>
                    <p className="text-sm text-gray-500">Телефон</p>
                    <a
                      href="tel:+998971233333"
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      +998 (97) 123-33-33
                    </a>
                    <br />
                    <a
                      href="tel:+998947103332"
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      +998 (94) 710-33-32
                    </a>
                  </div>

                  {/* Social media */}
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Наши соц сети</p>
                    <div className="flex gap-6">
                      <a
                        href="https://t.me/yourchannel"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-blue-500"
                      >
                        <SmartImage
                          src={Telegram}
                          alt="Telegram"
                          width={"20px"}
                          height={"20px"}
                        />
                        <span>Telegram</span>
                      </a>
                      <a
                        href="https://instagram.com/yourpage"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-pink-500"
                      >
                        <SmartImage
                          src={Instagram}
                          alt="Instagram"
                          width={"20px"}
                          height={"20px"}
                        />
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://youtube.com/yourchannel"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-red-500"
                      >
                        <SmartImage
                          src={Youtube}
                          alt="Youtube"
                          width={"20px"}
                          height={"20px"}
                        />
                        <span>Youtube</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </li>

            <li
              className=" hover:bg-gray-200 p-4 border-b border-b-gray-200 transition-all duration-300 cursor-pointer"
              onClick={() => handleTab("location")}
            >
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-4">
                  <SmartImage
                    src={Location}
                    alt={"Location"}
                    width={"20px"}
                    height={"20px"}
                  />
                  <p className="text-lg">Локация</p>
                </div>
                <SmartImage
                  src={Arrow}
                  alt={"arrow"}
                  width={"13px"}
                  height={"13px"}
                  className={`${
                    tab === "location" ? "rotate-180" : "rotate-90"
                  } transition-all duration-200`}
                />
              </div>

              {tab === "location" && (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-[400px] rounded-xl overflow-hidden shadow-md mt-[30px]"
                >
                  <MapContainer
                    center={position}
                    zoom={15}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={defaultIcon}>
                      <Popup>
                        <strong>Bizning sex 🏭</strong> <br />
                        Toshkent, Chilonzor tumani
                      </Popup>
                    </Marker>
                  </MapContainer>
                </motion.div>
              )}
            </li>
          </ul>

          {/* Content: tab ga qarab */}
          <div className="p-4">
            {tab === "catalog" && <p>📂 Bu yerda katalog chiqadi</p>}
          </div>
        </motion.div>
        <NavigationBottom />
      </div>
    </Layout>
  );
}
