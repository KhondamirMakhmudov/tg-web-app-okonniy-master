import NavigationBottom from "../components/bottom-navigation";
import Layout from "../layout/Layout";
export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-gray-800">Home Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome to the Home page of your project 🎉
      </p>

      <NavigationBottom />
    </Layout>
  );
}
