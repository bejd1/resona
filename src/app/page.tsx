import HeroImg from "./_components/heroImg";
import MainAboutUs from "./_components/mainAboutUs";
import NewProducts from "./_components/newProducts";
import Newsletter from "./_components/newsletter";
import Test from "./_components/test";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mb-50">
      <HeroImg />
      <Test />
      <MainAboutUs />
      <NewProducts />
      <Newsletter />
    </div>
  );
}
