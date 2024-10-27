'use client'
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll pozisyonuna göre state'i güncelle
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Scroll olayını dinle
    window.addEventListener("scroll", handleScroll);

    // Temizleme işlemi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`fixed top-0 left-0 right-0 mx-auto max-sm:px-4 z-50 ${isScrolled ? 'bg-[#131120] bg-opacity-70' : 'bg-transparent'}`}>
      <nav className="flex  max-w-[1440px] mx-auto  w-full sm:justify-center justify-between gap-8 items-center  min-h-[60px]">
      <Link
          href="/"
          className="font-bold text-2xl max-sm:text-base text-white"
        >
          Çissa Stone
        </Link>
        <div className="w-[1px] h-[16px] bg-neutral max-sm:hidden "></div>
      <Link
          href="#products"
          className="font-medium hover:underline max-sm:hidden text-neutral-200 text-[16px] underline-offset-4 max-md:text-xs"
        >
          Tüm Ürünleri Gör
        </Link>
        
        
        <Link
          href="/contact"
          className="font-medium hover:underline max-sm:hidden text-[16px] underline-offset-4 text-neutral-200 max-md:text-xs"
        >
          İletişim
        </Link>
        <div className="hidden max-sm:block">
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
