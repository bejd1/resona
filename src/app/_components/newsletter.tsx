"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import img from "../../img/newsletterImg.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { send } from "@/actions/sendNewsletter";
import Loader from "./loader";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | undefined>(
    "Email already in use"
  );
  const [success, setSuccess] = useState<string | undefined>(
    "Success, you have subscribed to the newsletter"
  );
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      startTransition(async () => {
        const data = await send(new FormData(e.currentTarget));
        if (!data.error) {
          setEmail("");
          setSuccess(data.success);
          toast({
            title: "Success!",
            description: success,
            variant: "success",
          });
        } else {
          setError(data.error);
          toast({
            title: "Error!",
            description: error,
            variant: "destructive",
          });
        }
      });
    } catch (error) {
      console.error("Error submitting newsletter:", error);
      setError("An error occurred while submitting the newsletter");
    }
  };
  return (
    <div className="mt-12 mb-20 md:px-24 w-full flex flex-col md:flex-row gap-10 justify-center md:justify-around items-center">
      <div className="flex flex-col justify-center w-4/5 sm:w-80 md:w-96">
        <h2 className="text-2xl md:text-4xl my-2 font-black">
          Join music and engineering enthusiasts!
        </h2>
        <p className="py-3 tracking-wide">
          Subscribe to our newsletter to receive up-to-date information on new
          products, promotions, and current events.
        </p>
        <form onSubmit={handleSubmit}>
          <Input
            className="h-11 border-zinc-500"
            placeholder="youremail@email.com"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            disabled={isPending}
            type="submit"
            className="h-11 mt-3 w-full md:w-40"
          >
            {isPending ? <Loader text={"Subscribe"} /> : "Subscribe"}
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
