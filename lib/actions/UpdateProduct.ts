import {  doc, updateDoc  } from "firebase/firestore";
import { initializeFirebaseClient } from "../FirebaseClient/config";

export async function updateProductData(id:string,productData:any){
    const {db}=initializeFirebaseClient();
    const collectionRef = doc(db, "products", id);
    try {
        await updateDoc(collectionRef, {
            productName: productData.productName, // Güncellenen alanlar
            productDescription: productData.productDescription,
            productAmount: productData.productAmount,
        });

        console.log("Ürün başarıyla güncellendi!");

    } catch (error) {
         console.error("Hata:", error);
        throw new Error("Veri çağrılırken hata oluştu.");
    }

}