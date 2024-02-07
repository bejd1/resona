import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const ContinueCart = () => {
  return (
    <div className="mt-10 md:mt-20">
      <Card className="flex flex-col md:flex-row justify-between p-8 md:p-16 bg-[#eff0f0]">
        <div>
          <h3 className="text-lg lg:text-2xl font-bold pb-2">
            Continue Shopping
          </h3>
          <p>You can explore more products</p>
        </div>
        <div>
          <Link href="/products">
            <Button
              variant="buttongroup"
              className="h-10 mt-6 sm:mt-4 w-full md:w-max "
            >
              CONTINUE SHOPPING
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ContinueCart;
