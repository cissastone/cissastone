import { doc, getDoc } from "firebase/firestore";
import { initializeFirebaseClient } from "../FirebaseClient/config";

type productDataType = {
    id: string;
    productName:string,
    productDescription:string,
    productAmount: string,
    imageUrl:string,
  };
export async function getProductData(id: string) {
    const { db } = initializeFirebaseClient();
    const collectionRef = doc(db, "products", id);

    try {
        const docSnapShot = await getDoc(collectionRef);

        if (docSnapShot.exists()) {
            const productData = {
                id: docSnapShot.id,
                ...docSnapShot.data(), // Veriyi al ve ürün bilgileriyle birleştir
            } as productDataType;
            return productData ; // Burada tam product verisi dönüyor
        } else {
            console.log("Id ile eşleşen ürün bulunamadı");
            return null;
        }
    } catch (error) {
        console.error("Hata:", error);
        throw new Error("Veri çağrılırken hata oluştu.");
    }
}
