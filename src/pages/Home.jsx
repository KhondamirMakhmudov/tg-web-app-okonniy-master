import NavigationBottom from "../components/bottom-navigation";
import HeroSlider from "../components/slide-image";
import Layout from "../layout/Layout";
export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <NavigationBottom />
    </Layout>
  );
}
