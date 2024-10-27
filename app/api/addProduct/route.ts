import { initAdmin } from "@/lib/FirebaseAdmin/config";
import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
export async function POST(request: NextRequest) {
  initAdmin();
  const adminDb = admin.firestore();
  const adminStorage = admin.storage().bucket();

  try {
    const formData = await request.formData();
    const productName = formData.get("productName") as string;
    const productDescription = formData.get("productDescription") as string;
    const productAmount = formData.get("productAmount") as string;
    const productImage = formData.get("productImage") as File;

    const imageUniqueId = uuidv4();
    const productImageRef = adminStorage.file(
      `productImages/${imageUniqueId}/${productImage.name}`
    );
    const productImageBuffer = Buffer.from(await productImage.arrayBuffer());

    await productImageRef.save(productImageBuffer, {
      contentType: productImage.type,
    });
    await productImageRef.makePublic();
    const productImageUrl = `https://firebasestorage.googleapis.com/v0/b/${
      adminStorage.name
    }/o/${encodeURIComponent(
      `productImages/${imageUniqueId}/${productImage.name}`
    )}?alt=media`;


    await adminDb.collection("products").add({
      productName,
      productDescription,
      productAmount,
      imageUrl: productImageUrl,
      createdAt: admin.firestore.Timestamp.now(),
    });

    revalidatePath("/adminDashboard")
    revalidatePath("/")

    return NextResponse.json({ message: "Ürün başarıyla yüklendi." });
  } catch (error: any) {
    console.error("Ürün yüklenemedi", error);
    return NextResponse.json(
      { error: "Ürün yüklenirken Hata oluştu" + error.message },
      { status: 500 }
    );
  }
}
