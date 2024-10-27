'use client'
import Image from "next/image";
import { useState } from "react";
type ProductCardProps={
  productName:string;
  productDescription:string;
  productAmount:string;
  productImage:string;
}
const ProductCard = ({productName,productDescription,productImage,productAmount}:ProductCardProps) => {
     // State to manage the visibility of the enlarged image
  const [isOpen, setIsOpen] = useState(false);
  
  // Function to toggle the modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    //bg-gradient-to-r from-[#ababab] via-[#ffffff] to-[#bababa]
    <div className="w-full bg-gradient-to-r from-neutral-800 to-neutral-600 rounded-md flex p-4 flex-col border border-neutral-500 ">
      <div className="group h-[200px]  w-4/5 mx-auto  bg-neutral-1000 flex items-center justify-center   relative overflow-hidden cursor-pointer">
        <Image
          src={productImage}
          alt="deneme"
          width={300}
           height={300}
          className="absolute z-0 object-cover hover:brightness-110 h-[180px] w-[300px]  transition-all ease-in-out duration-300 group-hover:scale-110"
          onClick={toggleModal}
        />
      </div>

      {/* Ürün Açıklaması */}
      <div className="mt-2 w-3/4 mx-auto">
        <h3 className="text-neutral font-semibold text-[24px] leading-tight mb-[12px]">{productName}</h3>
        <hr className=" opacity-15 mb-3" />
        <p className="text-sm text-neutral-200">Fiyat: <span className="">{productAmount} ₺</span></p>
        <p className="text-sm font-light text-neutral-300">{productDescription}</p>
      </div>

      {/* Modal for Enlarged Image */}
      {isOpen && (
        <div className="fixed inset-0  flex justify-center items-center z-50" onClick={toggleModal}>
          <div className="relative">
            <Image
              src={productImage}
              alt="deneme enlarged"
              width={400} // Adjust the width as needed
              height={400} // Adjust the height as needed
              className="object-cover"
            />
            <button
              className="absolute top-2 right-2 text-white bg-neutral-900 rounded-full px-2 py-1"
              onClick={toggleModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
