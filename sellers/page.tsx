import { query } from "@/lib/sqlDb"
import Image from "next/image"

export default async function SellerPage() {
    const sellers = await query("SELECT Seller_ID, Seller_Name, Seller_Country FROM Seller");

    return (
    <div className="min-h-screen bg-slate-900 hover:cursor-default">
        <div className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-3.5">
            <h1 className="text-white text-lg font-semibold">Sellers</h1>
        </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
        {sellers.length === 0 ? (
            <p className="text-slate-400">No sellers found.</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellers.map((seller: { Seller_ID: number; Seller_Name: string; Seller_Country: string }) => (
                <div
                key={seller.Seller_ID}
                className="p-4 rounded-xl shadow-md bg-slate-800 hover:shadow-lg transition-transform transform hover:-translate-y-1"
                >
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-md overflow-hidden bg-slate-700 shrink-0">
                    <Image
                    src="/anon.png"
                    alt={"Seller picture"}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    />
                    </div>

                    <div className="flex-1">
                    <h2 className="text-lg font-bold text-white">Partner: {seller.Seller_Name}</h2>
                    <p className="text-sm text-slate-300 mt-1">Location: {seller.Seller_Country}</p>
                    <div className="mt-3 flex items-center gap-2">
                        <button className="px-2 py-1 bg-slate-700 text-slate-200 rounded-md text-sm hover:bg-slate-600 transition hover:cursor-pointer ">Message</button>
                        <button className="px-2 py-1 bg-transparent border border-slate-700 text-slate-300 rounded-md text-sm hover:bg-slate-700 transition hover:cursor-pointer ">Profile</button>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
    )
}