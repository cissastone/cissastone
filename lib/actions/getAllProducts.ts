"use server"

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { initializeFirebaseClient } from "../FirebaseClient/config"
export async function getAllProducts(){
    const {db}=initializeFirebaseClient();
    const productsRef=collection(db,"products");
    const queryForSort=query(
        productsRef,
        orderBy("createdAt","desc")
    );
    const snapShot=await getDocs(queryForSort);
    const productData=snapShot.docs.map((doc)=>{
        const data=doc.data();
        return {
            id:doc.id,
            productName:data.productName,
            productDescription:data.productDescription,
            productAmount:data.productAmount,
            imageUrl:data.imageUrl
        }
    });
    return productData;
}