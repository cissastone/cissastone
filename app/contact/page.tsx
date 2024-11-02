import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="w-full  md:justify-center md:items-center flex flex-col gap-1  h-full ">
      <h1 className="sm:text-8xl text-7xl font-bold bg-gradient-to-b from-gradientTextStart sm:mb-2 max-sm:w-full   to-gradientTextEnd text-transparent bg-clip-text">
        Bize Ulaşın
      </h1>
      <p className="text-base md:w-1/2  max-md:text-xs max-md:w-full text-neutral-300 mt-2  ">
        Biz, özgün ve sınırsız taş tasarımları sunan bir ekibiz. Yapay taşın
        değişimiyle ilgili derin bilgimiz ve deneyimimizle,{" "}
        <span className=" text-neutral ">estetik ve fonksiyonelliği </span>
        bir araya getiriyoruz.
      </p>
      <p className="text-base md:w-1/2  max-md:text-xs max-md:w-full text-neutral-300 mt-2 ">
        Projeler, müşteri taleplerine özel şekillendirilip ,{" "}
        <span className=" text-neutral">yüksek kalitede</span> özelliklerle
        üretilmektedir.
      </p>
      <p className="text-base md:w-1/2  max-md:text-xs max-md:w-full text-neutral-300 mt-2">
        <span className=" text-neutral">Amacımız</span> , yaratıcı
        tasarımlarımızla mekanlara{" "}
        <span className=" text-neutral">değer katmak</span> ve hayallerinizdeki
        nesneleri gerçeğe dönüştürmektir. Sürdülebilirlik ve gelişmişlik
        ilkelerimizle, sektordeki en iyi çözümleri sunmayı hedeflemekteyiz.
      </p>

      <h3 className="text-xl text-neutral-200 underline mt-10 mb-2 ">
        İletişim Adreslerimiz
      </h3>
      <div className="w-fit h-fit bg-neutral-800 sm:p-8 p-2 rounded-md flex flex-col gap-3 border border-neutral-400">
        {/* Telefon1 */}
        <div className="flex gap-2 items-center">
          {/* İcon Telefon */}
          <Phone size={16} className="text-neutral-200" />
          {/* Numara */}
          <span className="text-neutral-200 font-medium text-base max-sm:text-xs tracking-[1px]">
            05313442265
          </span>
          <span className="text-neutral-200 font-medium text-base max-sm:text-xs tracking-[1px]">
            / Ender Sonkaya
          </span>
        </div>
        {/* Telefon2 */}
        <div className="flex gap-2 items-center">
          {/* İcon Telefon */}
          <Phone size={16} className="text-neutral-200" />
          {/* Numara */}
          <span className="text-neutral-200  font-medium text-base max-sm:text-xs tracking-[1px]">
            05443861293
          </span>
          <span className="text-neutral-200 font-medium text-base max-sm:text-xs tracking-[1px]">
            / Recep Sonkaya
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Mail size={16} className="text-neutral-200" />
          <span className="text-neutral-200 font-medium text-base max-sm:text-xs tracking-[1px]">
            cissastone39@gmail.com
          </span>
        </div>

        <Link
          target="blank"
          href={"https://www.instagram.com/cissastone39/"}
          className="flex gap-2 items-center w-fit  cursor-pointer"
        >
          {/* İcon Telefon */}
          <Instagram size={16} className="text-neutral-200 hover:text-white" />
          {/* Numara */}
          <p className="text-neutral-200  font-medium text-base max-sm:text-xs tracking-[1px]">
            Cissastone39
          </p>
        </Link>
        <div className="flex gap-2 items-center w-fit">
          <MapPin  className="text-neutral-200 max-sm:text-xl max-sm:w-8 max-sm:h-8 w-4 h-4" />
          <span className="text-neutral-200 font-medium text-base max-sm:text-xs tracking-[1px]">
            Kırklareli merkez/ Akalar mahallesi/ namazgah Caddesi/ bina no:64/1B
          </span>
        </div>
      </div>
    
    {/* İmageBg */}
    <div className="flex absolute -z-[10]  mix-blend-multiply opacity-40 h-full w-full">
    <Image src={"/street.jpg"} alt="bg" fill className="object-cover  z-0" />
    </div>
    </div>
  );
};

export default ContactPage;
