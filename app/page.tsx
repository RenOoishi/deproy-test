import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="h-screen flex flex-col justify-center items-center bg-black">
        <Link href={"https://www.google.com/search?q=cat&sca_esv=782705a13c1e22f4&sca_upv=1&udm=2&biw=1536&bih=703&ei=XuwyZtHNHKzk2roP9OSnqA4&ved=0ahUKEwjR9NG56O2FAxUsslYBHXTyCeUQ4dUDCBA&oq=cat&gs_lp=Egxnd3Mtd2l6LXNlcnAiA2NhdDIKEAAYgAQYsQMYBDIHEAAYgAQYBDIHEAAYgAQYBDIKEAAYgAQYsQMYBDIHEAAYgAQYBDIQEAAYgAQYsQMYgwEYBBiKBTIKEAAYgAQYsQMYBDIGEAAYAxgEMgoQABiABBixAxgEMgoQABiABBixAxgESOsQUABYAHABeACQAQCYAQCgAQCqAQC4AQzIAQCYAgGgAgWYAwCIBgGSBwExoAcA&sclient=gws-wiz-serp"}
         className="font-bold text-lg text-neutral-100">
          Hello Page
        </Link>
        <Link href={"https://ja.wiktionary.org/wiki/%E3%81%BE%E3%81%AC%E3%81%91"}
          className="">
          🗒️
        </Link>
      </div>
    </div>
  );
}
