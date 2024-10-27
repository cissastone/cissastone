"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Menu className="cursor-pointer hover:bg-neutral-400 hover:text-neutral-50 hover:rounded-md transition-all ease-in-out text-neutral-200 hidden max-sm:block" onClick={() => setOpen((currentState)=>!currentState)} />
      {open && <div className="absolute right-1 mt-4 h-fit bg-neutral-400 text-neutral font-bold w-fit p-4 hidden max-sm:block"><div className="flex flex-col gap-3">
        <Link
            href={"/"}
            className="font-medium hover:underline   text-[16px] underline-offset-4  max-md:text-xs"
          >
            Anasayfa
          </Link>
          <Link
            href={"#products"}
            className="font-medium hover:underline   text-[16px] underline-offset-4 max-md:text-xs"
          >
            Tüm Ürünleri Gör
          </Link>
          <Link
            href={"/contact"}
            className="font-medium hover:underline   text-[16px] underline-offset-4  max-md:text-xs"
          >
            İletişim
          </Link>
        
        </div></div>}
    </div>
  );
};

export default MobileMenu;
