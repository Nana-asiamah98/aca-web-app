import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/logo.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <div className=" flex flex-row text-white space-x-2 pl-52 my-10">
      <span className="text-sm">Designed By </span>
      <Link
        className="font-semibold "
        href={`https://nana-asiamah.vercel.app/`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                alt="nana_asiamah_logo"
                src={Logo}
                width={30}
                height={30}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Nana Asiamah</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  );
};
