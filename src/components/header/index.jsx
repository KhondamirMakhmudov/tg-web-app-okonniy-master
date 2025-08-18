import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const tg = useTelegram();
  const user = tg?.initDataUnsafe?.user;

  return (
    <header className="p-4 text-xs bg-white text-black rounded-lg mb-4">
      {user ? (
        <h2>
          👋 Salom, <strong>{user.first_name}</strong>
        </h2>
      ) : (
        <p>Telegram user aniqlanmadi</p>
      )}
    </header>
  );
};

export default Header;
