import NavigationBottom from "../components/bottom-navigation";
import Layout from "../layout/Layout";

export default function Profile() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-gray-800">Profile Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the Profile page. You can add more information here 📖
      </p>

      <NavigationBottom />
    </Layout>
  );
}
