import HeroImg from "./components/heroImg";
import MainAboutUs from "./components/mainAboutUs";
import NewProducts from "./components/newProducts";
import Newsletter from "./components/newsletter";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mb-50">
      <HeroImg />
      <MainAboutUs />
      <NewProducts />
      <Newsletter />
    </div>
  );
}
