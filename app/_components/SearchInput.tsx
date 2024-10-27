"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
  productName: string;
  productDescription: string;
  productAmount: string;
  imageUrl: string;
};
type SearchInputProps = {
  products: Product[];
};
const SearchInput = ({ products }: SearchInputProps) => {
  const [search, setSearch] = useState("");
  const searchFilter = (product: any) => {
    const cleanedSearch = search.trim().replace(/\s+/g, " "); // Fazla boşlukları bir boşluğa indirger

    return product.filter((product: Product) =>
      product.productName.toLowerCase().includes(cleanedSearch.toLowerCase())
    );
  };

  const filteredProduct = searchFilter(products);
  return (
    <div>
      <div className="flex max-sm:flex-col  items-center justify-between gap-4   relative">
      <h3 className="text-3xl  text-neutral-300 font-medium">Tüm Ürünlerimiz</h3>
        <input
          type="text"
          placeholder="Ürün Arayın..."
          className="px-4 py-2  rounded-full outline-none focus:px-10"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* products place */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full p-4">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((product: Product) => (
            <ProductCard
              key={product.imageUrl}
              productImage={product.imageUrl}
              productDescription={product.productDescription}
              productName={product.productName}
              productAmount={product.productAmount}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-red-500 font-semibold">
            Bu ürün bulunamadı
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
