import React from "react";
import Image from "next/image";
import img from "../../img/big.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resona - About us",
};

const AboutUs = () => {
  return (
    <div className="py-12 px-6 md:px-24 w-full">
      <h1 className="flex place-items-start text-4xl font-extrabold mb-2">
        O nas
      </h1>
      <div className="w-full h-[1px] bg-black mb-20"></div>
      <div className="flex lg:grid grid-cols-2 gap-10 flex-col">
        <div className="tracking-wide">
          <h3 className="text-2xl font-extrabold mb-4">
            Historia Firmy "Resona"
          </h3>
          <p className="mb-2">
            Resona to marka, która zrodziła się z pasji do innowacyjnej
            technologii i pragnienia tworzenia trwałych, ponadczasowych
            rozwiązań elektronicznych. Choć nie mamy za sobą trzydziestoletniej
            tradycji, jak kultowa Unitra, to nasza historia zaczęła się z
            marzeniem o przyszłości, w której elektronika nie tylko spełnia
            oczekiwania, ale również inspiruje i łączy ludzi wokół wspólnego
            doświadczenia.
          </p>
          <h3 className="mb-1 text-xl font-bold">Wizja</h3>
          <p className="mb-2">
            Marzymy o świecie, w którym elektroniczne urządzenia nie są
            jednorazowe i nienaprawialne. Resona to nie tylko marka, to idea
            tworzenia inteligentnych, trwałych produktów, które nie tylko
            sprostają oczekiwaniom dzisiaj, ale także przetrwają próbę czasu.
            Nasza wizja obejmuje wprowadzenie ludzi w świat technologii, która
            nie tylko ułatwia życie codzienne, ale również stanowi źródło
            inspiracji i radości.
          </p>
          <h3 className="mb-1 text-xl font-bold">Misja</h3>
          <p className="mb-2">
            Dążyć do rozwoju najlepszych tradycji inżynierii, stawiając na
            produkcję lokalną, tworzymy sprzęt elektroniczny, który dostarcza
            użytkownikom niezapomnianych wrażeń. Nasza misja to kontynuowanie
            polskiego dziedzictwa inżynieryjnego w dziedzinie nowoczesnych
            technologii, rozwijając jednocześnie unikalne, trwałe produkty z
            myślą o długotrwałej satysfakcji użytkowników.
          </p>
        </div>
        <div>
          <Image src={img} width={0} height={0} alt="Picture of the author" />
        </div>
      </div>
      <h1 className="text-4xl font-extrabold mt-12 mb-2">Wartości</h1>
      <div className="w-full h-[1px] bg-black mb-12"></div>
      <div className="flex gap-10 justify-center flex-col lg:flex-row">
        <div className="flex flex-col">
          <h3 className="mb-1 text-xl font-bold">INNOWACYJNOŚĆ</h3>
          <p className="mb-2">
            W Resona odważamy się eksperymentować z nowymi, niekonwencjonalnymi
            rozwiązaniami, zawsze dążąc do implementacji praktycznych innowacji.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-1 text-xl font-bold">SPOŁECZNOŚĆ I PASJA</h3>
          <p className="mb-2">
            Jesteśmy nie tylko producentem urządzeń elektronicznych, ale również
            wspólnotą ludzi z pasją do technologii. Tworzymy dla ludzi, z
            ludźmi, budując społeczność wokół marki Resona.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-1 text-xl font-bold">NAPĘDZANI INŻYNIERIĄ</h3>
          <p className="mb-2">
            Miłość do inżynierii jest fundamentem naszej działalności. To ona
            sprawia, że każdy produkt, który opuszcza nasze laboratoria, jest
            wynikiem staranności, testowania i nieustannego doskonalenia.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-1 text-xl font-bold">ODPOWIEDZIALNOŚĆ</h3>
          <p className="mb-2">
            Jesteśmy świadomi wpływu naszych produktów na życie ludzi i
            środowisko. Dlatego angażujemy się w tworzenie rozwiązań z myślą o
            przyszłości, dbając o odpowiedzialność społeczną i zrównoważony
            rozwój.
          </p>
        </div>
      </div>
      <p className="my-8 font-extrabold">
        Resona - Twoje okno do nowoczesnej elektroniki, gdzie innowacje
        spotykają się z solidnością.
      </p>
    </div>
  );
};

export default AboutUs;
