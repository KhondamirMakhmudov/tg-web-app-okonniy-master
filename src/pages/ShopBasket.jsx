import NavigationBottom from "../components/bottom-navigation";
import Layout from "../layout/Layout";

export default function ShopBasket() {
  return (
    <Layout>
      <div className="min-h-screen  bg-gray-50 mt-[20px] border border-gray-200 rounded-t-2xl shadow-lg">
        <NavigationBottom />
      </div>
    </Layout>
  );
}
