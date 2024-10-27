'use server'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { initializeFirebaseClient } from "../FirebaseClient/config";
import { revalidatePath } from "next/cache";


interface ProductData {
    productName: string;
    productDescription: string;
    productAmount: string;
  }
export async function updateProductData(id: string, productData: any) {
  const { db } = initializeFirebaseClient();
  const collectionRef = doc(db, "products", id);
  try {
    await updateDoc(collectionRef, {
      productName: productData.productName, // Güncellenen alanlar
      productDescription: productData.productDescription,
      productAmount: productData.productAmount,
    });
    console.log("Ürün başarıyla güncellendi!");

    const updatedDoc = await getDoc(collectionRef);
    revalidatePath("/adminDashboard")
    revalidatePath("/")
    if (updatedDoc.exists()) {
      return updatedDoc.data() as ProductData;
    } else {
      throw new Error("Güncellenen veri bulunamadı.");
    }
  } catch (error) {
    console.error("Hata:", error);
    throw new Error("Veri çağrılırken hata oluştu.");
  }
}
