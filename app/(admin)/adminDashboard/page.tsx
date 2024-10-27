import ProductButtons from "@/app/_components/ProductButtons";
import { getAllProducts } from "@/lib/actions/getAllProducts"
import Image from "next/image";

export const revalidate = 0; // 60 saniyede bir veriyi yeniden getir
const AdminDashboard =async () => {
    const products = await getAllProducts();
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 w-full p-4 h-screen">
      {products.map((product,index)=>(
        <div className="w-full  flex gap-2 flex-col items-center  bg-neutral-500 rounded-md p-2 h-fit" key={index}>
            <div className="w-16 h-16 relative  ">
            <Image src={product.imageUrl} alt="productImage" fill className="object-cover rounded-full" />
            </div>
            <div className="flex  flex-col gap-1 justify-center">
                <h3 className="text-white font-bold text-xl">{product.productName}</h3>
                <h3 className="text-white  font-bold text-xl">Fiyat: {product.productAmount} ₺</h3>
                <p className="text-white text-xs">{product.productDescription}</p>
            </div>
           <ProductButtons productid={product.id} />
        </div>
      ))}
    </div>
  )
}

export default AdminDashboard