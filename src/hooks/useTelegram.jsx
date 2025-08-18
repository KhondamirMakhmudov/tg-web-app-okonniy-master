import { useEffect, useState } from "react";

export const useTelegram = () => {
  const [tg, setTg] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready(); // Telegram’ga app tayyor ekanini aytadi
      setTg(webApp);
    }
  }, []);

  return tg;
};
