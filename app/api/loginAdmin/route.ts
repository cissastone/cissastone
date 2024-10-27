import { initAdmin } from "@/lib/FirebaseAdmin/config";
import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin"
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/lib/actions/TokenProcess";



export async function POST(request:NextRequest){
    initAdmin();
  const adminDb=admin.firestore();
  const collectionRef=adminDb.collection("admin");
    try {
        const formData=await request.formData();
        const username=formData.get("username") as string;
        const password=formData.get("password") as string;

        const querySnapShot=await collectionRef.where("username","==",username).get();

        if(querySnapShot.empty){
            return NextResponse.json({message:"Kullanıcı Bulunamadı"},{status:404});
        }
        const adminDoc=querySnapShot.docs[0];
        const adminData=adminDoc.data();

        // Şifreyi bcrypt ile hashleme
        const passwordMatch=await bcrypt.compare(password,adminData.password);
        if(!passwordMatch){
            return NextResponse.json({message:"Şifre Hatalı"},{status:401})
        };

        const token=await new SignJWT({
            username:adminData.username
        }).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("4 hours").sign(getJwtSecretKey());

        const response=NextResponse.json({
            success:true
        });
        response.cookies.set({
            name:"admin",
            value:token,
            path:"/"
        })

        return response;

    } catch (error:any) {
        console.error("Form data is not found from request");
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}