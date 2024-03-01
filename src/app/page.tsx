import HeroImg from "./_components/heroImg";
import MainAboutUs from "./_components/mainAboutUs";
import NewProducts from "./_components/newProducts";
import Newsletter from "./_components/newsletter";

export const metadata = {
  title: "Resona | Greates audio",
};

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
