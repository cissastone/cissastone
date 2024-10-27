"use server";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { initializeFirebaseClient } from "../FirebaseClient/config";
import { deleteObject, ref } from "firebase/storage";
import { revalidatePath } from "next/cache";

export async function deleteProductData(productid: string) {
  const { db, storage } = initializeFirebaseClient();
  const collectionRef = doc(db, "products", productid);
  try {
    const productSnapshot = await getDoc(collectionRef);
    if (!productSnapshot.exists()) {
      throw new Error("Ürün bulunamadı");
    }
    // Ürünün resim url ini alma
    const productData = productSnapshot.data();
    const imageUrl = productData.imageUrl;

    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);

    await deleteDoc(collectionRef);
    console.log("Ürün başarıyla silindi!");
    revalidatePath("/adminDashboard");
    revalidatePath("/");
  } catch (error) {
    console.error("Hata:", error);
    throw new Error("Veri çağrılırken hata oluştu.");
  }
}
