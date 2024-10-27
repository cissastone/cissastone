"use client";
import Link from "next/link";
import { useState } from "react";

const AddProducts = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/addProduct", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Ürün Başarıyla Eklendi");
        setLoading(false);
        setMessage(true);
      } else {
        console.log("Ürün Ekleme işlemi başarısız");
        setLoading(false);
      }
    } catch (error:any) {
      console.log("Hata:", error);
      setLoading(false);
    }
  };
  return (
    <div className="w-full  flex justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className=" top-6 relative flex flex-col gap-4 max-sm:w-[300px] sm:w-[500px] sm:h-[450px] bg-paragraph p-4 rounded-md"
      >
        <h1 className="flex justify-center font-bold text-white text-2xl">
          Ürün Ekleme Paneli
        </h1>
        <input
          type="text"
          name="productName"
          placeholder="Ürün Adını Giriniz..."
          className="rounded-md p-2"
          required
        />
        <input
          type="text"
          name="productDescription"
          placeholder="Ürün İçeriğini Giriniz..."
          className="rounded-md p-2"
          required
        />
        <input
          type="text"
          name="productAmount"
          placeholder="Ürün Fiyatını Giriniz..."
          className="rounded-md p-2"
          required
        />
        <label htmlFor="imageFile" className="text-white">
          Ürün Resmini Giriniz (.svg uzantılı olmasına dikkat ediniz.)
        </label>
        <span className="text-white">
          Önerilen resim Boyutu minimum (482x250) olmalı
        </span>
        <input
          id="imageFile"
          name="productImage"
          type="file"
          required
          className="text-white"
        />
        {message && (
          <p className="text-white font-bold">Ürün Başarıyla Eklendi</p>
        )}
        <button
          type="submit"
          className="bg-neutral-300 text-white p-2 hover:bg-neutral-400 rounded-md mt-2"
        >
          {loading ? "Yükleniyor..." : "Ürün Ekle"}
        </button>
        <button className=" h-fit w-fit  px-4 py-2 bg-neutral-300 text-white mt-2 rounded-md hover:bg-neutral-400  transition-all ease-in-out ">
          <Link href={"/adminDashboard"}>Tüm Ürünleri Gör</Link>
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
