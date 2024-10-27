import Link from "next/link"

const AdminNavPage = () => {
  return (
    <div className="w-full justify-center flex gap-4 h-screen ">
      <button className=" h-fit px-4 py-2 bg-neutral-300 text-white mt-2 rounded-md hover:bg-neutral-400 transition-all ease-in-out "><Link href={"/addProducts"} >Ürün Ekle</Link></button>
      <button className=" h-fit  px-4 py-2 bg-neutral-300 text-white mt-2 rounded-md hover:bg-neutral-400  transition-all ease-in-out "><Link href={"/adminDashboard"} >Tüm Ürünleri Gör</Link></button>

    </div>
  )
}

export default AdminNavPage