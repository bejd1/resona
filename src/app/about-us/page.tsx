import React from "react";
import Image from "next/image";
import img from "../../img/about-us-img.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};

const AboutUs = () => {
  return (
    <div className="py-4 md:py-12 px-6 md:px-24 w-full">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-2">About Us</h1>
      <div className="w-full h-[1px] bg-black mb-8 md:mb-16"></div>
      <div className="flex lg:grid grid-cols-2 gap-20 flex-col">
        <div className="tracking-wide">
          <h3 className="text-xl md:text-2xl font-extrabold mb-4">
            Company History "Resona"
          </h3>
          <p className="mb-2">
            Resona is a brand born out of a passion for innovative technology
            and the desire to create durable, timeless electronic solutions.
            While we may not have a thirty-year tradition like the iconic
            Unitra, our story began with a dream of a future where electronics
            not only meet expectations but also inspire and connect people
            through a shared experience.
          </p>
          <h3 className="mb-1 text-md md:text-xl font-bold">Vision</h3>
          <p className="mb-2">
            We dream of a world where electronic devices are not disposable and
            irreparable. Resona is not just a brand; it's an idea of creating
            intelligent, durable products that not only meet today's
            expectations but also stand the test of time. Our vision involves
            introducing people to technology that not only facilitates daily
            life but also serves as a source of inspiration and joy.
          </p>
          <h3 className="mb-1 text-md md:text-xl font-bold">Mission</h3>
          <p className="mb-2">
            Striving to develop the best engineering traditions and emphasizing
            local production, we create electronic equipment that provides users
            with unforgettable experiences. Our mission is to continue the
            Polish engineering heritage in modern technology while
            simultaneously developing unique, durable products with a focus on
            long-term user satisfaction.
          </p>
        </div>
        <div>
          <Image
            src={img}
            width={700}
            height={100}
            priority={true}
            alt="Production Engineer"
          />
        </div>
      </div>
      <h1 className="text-4xl font-extrabold mt-12 mb-2">Values</h1>
      <div className="w-full h-[1px] bg-black mb-12"></div>
      <div className="flex gap-10 justify-center flex-col lg:flex-row">
        <div className="flex flex-col">
          <h3 className="mb-1 text-md md:text-xl font-bold">INNOVATION</h3>
          <p className="mb-2">
            At Resona, we dare to experiment with new, unconventional solutions,
            always aiming to implement practical innovations.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-1 text-md md:text-xl font-bold">
            COMMUNITY AND PASSION
          </h3>
          <p className="mb-2">
            We are not just a manufacturer of electronic devices but also a
            community of people passionate about technology. We create for
            people, with people, building a community around the Resona brand.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-1 text-md md:text-xl font-bold">
            DRIVEN BY ENGINEERING
          </h3>
          <p className="mb-2">
            The love for engineering is the foundation of our work. It is what
            makes every product leaving our labs a result of meticulousness,
            testing, and constant improvement.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-1 text-md md:text-xl font-bold">RESPONSIBILITY</h3>
          <p className="mb-2">
            We are aware of the impact of our products on people's lives and the
            environment. That's why we engage in creating solutions with the
            future in mind, emphasizing social responsibility and sustainable
            development.
          </p>
        </div>
      </div>
      <p className="my-8 text-xl font-extrabold underline underline-offset-4">
        Resona - Your window to modern electronics, where innovation meets
        reliability.
      </p>
    </div>
  );
};

export default AboutUs;
