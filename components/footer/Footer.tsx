import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="text-white pl-52 my-10">
      <span className="text-sm">
        Designed By{" "}
        <Link className="font-semibold text-teal-500" href={`https://nana-asiamah.vercel.app/`}>Nana Asiamah</Link>
      </span>
    </div>
  );
};
