'use client'
import { getProductData } from "@/lib/actions/GetProductData";
import { useState } from "react";
import { updateProductData } from "@/lib/actions/UpdateProduct"; // Güncelleme fonksiyonu
import { deleteProductData } from "@/lib/actions/deleteProduct";

const ProductButtons = ({productid}:{productid:string}) => {
    const [openForm, setOpenForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [productData, setProductData] = useState({
        productName: "",
        productDescription: "",
        productAmount: "",
    });

    // Ürün verisini çek ve state'e ata
    const handleFormState = async () => {
        const data = await getProductData(productid);
        if (!data) {
            setMessage("Ürün Bulunamadı");
            return;
        }
        console.log(data.imageUrl)
        setProductData(data)
        setOpenForm(true);
    };

    // Input değerlerini güncelle
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Formun varsayılan gönderimini engelle
    
        setLoading(true); // Yükleniyor durumunu ayarla
    
        try {
            await updateProductData(productid, productData);
            const data = await getProductData(productid);
            setProductData(data!)

    
            setMessage("Ürün Başarıyla Güncellendi"); // Başarılı güncelleme mesajı
            setOpenForm(false); // Formu kapat
        } catch (error) {
            console.error(error); // Hata durumunda konsola hata yazdır
            setMessage("Güncelleme Başarısız"); // Başarısız güncelleme mesajı
        } finally {
            setLoading(false); // Yükleniyor durumunu kapat
        }
    };
    
    const handleDeleteProduct=async ()=>{
        try {
            await deleteProductData(productid);
            setMessage("Ürün Başarıyla Silindi")
        } catch (_) {
            setMessage("Güncelleme Başarısız");
            
        }finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex gap-4">
            <button onClick={handleFormState} className="text-white rounded-md px-2 py-1 bg-[#63E630]">
                Ürünü Güncelle
            </button>
            <button onClick={handleDeleteProduct} className="text-white rounded-md px-2 py-1 bg-[#e63030]">
                Ürünü Sil
            </button>

            {openForm && (
                <form onSubmit={handleSubmit} className="absolute flex flex-col gap-4 max-sm:w-[300px] sm:w-[500px] sm:h-[450px] bg-paragraph p-4 rounded-md">
                    <span className="flex justify-end cursor-pointer" onClick={()=>setOpenForm(false)}>X</span>
                    <h1 className="flex justify-center font-bold text-white text-2xl">
                        Ürün Güncelleme Paneli
                    </h1>
                    <input
                        type="text"
                        name="productName"
                        value={productData.productName}
                        onChange={handleChange}
                        className="rounded-md p-2"
                        required
                    />
                    <input
                        type="text"
                        name="productDescription"
                        value={productData.productDescription}
                        onChange={handleChange}
                        placeholder="Ürün İçeriğini Giriniz..."
                        className="rounded-md p-2"
                        required
                    />
                    <input
                        type="text"
                        name="productAmount"
                        value={productData.productAmount}
                        onChange={handleChange}
                        placeholder="Ürün Fiyatını Giriniz..."
                        className="rounded-md p-2"
                        required
                    />


                    {message && (
                        <p className={`font-bold ${message.includes("Başarıyla") ? "text-green-500" : "text-red-500"}`}>
                            {message}
                        </p>
                    )}

                    <button type="submit" className="bg-neutral-300 hover:bg-neutral-400 text-white p-2 rounded-md mt-2">
                        {loading ? "Yükleniyor..." : "Ürünü Güncelle"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ProductButtons;
