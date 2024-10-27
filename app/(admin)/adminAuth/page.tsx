"use client";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AdminAuthPage = () => {
  const [loading, setLoading] = useState(false);
  const router=useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
     

    try {
      const formData=new FormData(e.currentTarget);
      const response=await fetch("/api/loginAdmin",{
        method:"POST",
        body:formData
      });
      if(response.ok){
        console.log("Giriş İşlemi Başarılı")
        setLoading(false);
        router.push("/adminAuth/adminNavigator")
      }else{
        console.log("Giriş işlemi başarısız")
        setLoading(false);
      }
    } catch (error:any) {
      console.log("Hata:",error)
      setLoading(false);
    }
  };
  return (
    <div className="w-full  flex justify-center relative ">
      <form onSubmit={handleSubmit} className=" top-6 relative flex flex-col gap-3 w-[500px] h-[300px] bg-paragraph p-4 rounded-md">
        <h1 className="flex justify-center font-bold text-white text-2xl">
          Admin Paneli
        </h1>

        <div className="flex flex-col">
          <label htmlFor="username" className="text-neutral">Kullanıcı Adı</label>
          <input
            type="text"
            name="username"
            placeholder="Kullanıcı Adı"
            className="rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-neutral">Şifre</label>
          <input name="password" type="password" placeholder="Şifre" className="rounded-md p-2 " />
        </div>
        <button className="text-white bg-neutral-400 hover:bg-neutral-500 p-2 rounded-md flex items-center justify-center gap-2">
          Giriş Yap{" "}
          {loading && <LoaderCircle className="animate-spin" size={20} />}
        </button>
      </form>
    </div>
  );
};

export default AdminAuthPage;
