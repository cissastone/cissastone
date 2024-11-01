import Link from "next/link";
import Products from "./_components/Products";
import Image from "next/image";

// export const revalidate = 0;
export default function Home() {
  return (
    <main>
      <section className="flex mt-10 max-sm:flex-col max-sm:gap-4">
        <div className="flex-1 flex gap-4 sm:justify-between flex-col relative z-10">
          <div>

          <span className="text-neutral-300 text-xs inline-block sm:top-4 sm:-right-[450px] relative max-lg:left-[100px]">
            3D Tasarım İşlemleri
          </span>
          <h1 className="sm:text-8xl text-7xl font-bold bg-gradient-to-b from-gradientTextStart sm:mb-8 max-sm:w-full   to-gradientTextEnd text-transparent bg-clip-text">
            Çissa Stone
          </h1>
          <p className="text-neutral-300 leading-8 sm:text-lg  sm:max-w-[600px]">
            Yapay taşın değişimiyle ilgili derin bilgimiz ve deneyimimizle,
            estetik ve fonksonelliği bir araya getiriyoruz.
          </p>
          </div>
          {/* Direction buttons */}
          <div className="flex gap-4 items-center  max-lg:flex-col max-lg:w-fit">
          <button className="bg-primary  text-neutral  px-4 py-2 text-xl rounded-full hover:bg-neutral-400 font-medium"><Link href={"#products"}>Tüm Ürünleri Gör</Link></button>
          <button className="border border-primary  text-primary max-sm:px-2   px-4 py-2 text-xl rounded-full hover:bg-neutral-400 font-medium"><Link href={"/contact"}>Bizimle İletişime Geç</Link></button>
          <Link href="https://wa.me/905313442265" target="_blank" rel="noopener noreferrer"><Image src="/whatsapp.png" alt="whatsappicon" width={32} height={32} className="object-cover" /></Link>
          </div>
        </div>
        <div className="absolute w-[500px] h-[500px] max-sm:hidden bg-slate-50 left-0 rounded-full blur-[100px] opacity-10 z-0" />

        <div className="w-full flex-1 grid grid-cols-1 sm:row-span-4   gap-4 sm:grid-cols-5 ">
        <div className="absolute w-[500px] h-[500px]  bg-neutral-200 right-0 rounded-full blur-[100px] opacity-30" />

          <div className=" h-[150px] max-sm:h-[200px] col-span-5 row-span-2 relative overflow-hidden  ">
            <Image src="/im1.jpg" fill alt="image" className="object-cover rounded-md hover:brightness-125 transition-all ease-in-out " />
          </div>
          <div className="sm:col-span-3 col-span-5 sm:row-span-1 max-sm:h-[200px]   relative">
            <Image src="/im4.jpg" fill alt="image"  className="object-cover rounded-md hover:brightness-125 transition-all ease-in-out"/>
          </div>
          <div className="sm:col-span-2 col-span-5 h-[200px]  row-span-1 relative">
            <Image src="/im5.jpg" fill alt="image" className="object-cover rounded-md hover:brightness-125 transition-all ease-in-out" />
          </div>
          <div className="sm:col-span-2 col-span-5 h-[100px] max-sm:h-[200px] relative">
            <Image src="/im2.jpg" fill alt="image" className="object-cover rounded-md hover:brightness-125 transition-all ease-in-out" />
          </div>
          <div className="sm:col-span-3 col-span-5 h-[100px] max-sm:h-[200px] relative">
            <Image src="/im3.jpg" fill alt="image" className="object-cover rounded-md hover:brightness-125 transition-all ease-in-out" />
          </div>
        </div>
      </section>
      <Products /> 

    </main>
  );
}
