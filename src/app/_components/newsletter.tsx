"use client";
import Image from "next/image";
import React, { startTransition, useRef, useState, useTransition } from "react";
import img from "../../img/newsletterImg.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { send } from "@/actions/sendNewsletter";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLFormElement>(null);

  const handleCreateSubmit = async (formData: FormData) => {
    try {
      await send(formData);

      startTransition(() => {});

      toast("Success!", {
        description: "You subscribed to the newsletter",
      });
      ref.current?.reset();
    } catch (error) {
      console.error("Subscribe newsletter error:", error);
    }
  };

  return (
    <div className="mt-12 mb-20 px-4 md:px-24 w-full flex flex-col md:flex-row gap-10 justify-center md:justify-around items-center">
      <div className="flex flex-col justify-center w-4/5 sm:w-80 md:w-96">
        <h2 className="text-2xl md:text-4xl my-2 font-black">
          Join music and engineering enthusiasts!
        </h2>
        <p className="py-3 tracking-wide">
          Subscribe to our newsletter to receive up-to-date information on new
          products, promotions, and current events.
        </p>
        <form action={send}>
          <Input
            className="h-11"
            placeholder="youremail@email.com"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="h-11 mt-3 w-full md:w-40">
            Subscribe
          </Button>
        </form>
      </div>
      <div className="w-5/6 md:w-[500px]">
        <Image src={img} width={0} height={0} alt="Audio speaker system" />
      </div>
    </div>
  );
};

export default Newsletter;
