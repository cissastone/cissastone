import { getAllProducts } from "@/lib/actions/getAllProducts";
import SearchInput from "./SearchInput";

export const revalidate = 0; // 60 saniyede bir veriyi yeniden getir

const Products = async () => {
  const products = await getAllProducts();
  return (
    <section className="my-20 w-full pt-[60px]" id="products">
      {/* input place */}
     <SearchInput products={products} />

     
    </section>
  );
};

export default Products;
