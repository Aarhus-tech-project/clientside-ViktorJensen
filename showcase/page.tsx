import { query } from "@/lib/sqlDb"
import Image from "next/image"

export default async function ShowcasePage() {
	const weapons = await query("SELECT Weapon_ID, Weapon_Name, Weapon_Type, Weapon_Origin_Country, Weapon_Unit_Price FROM Weapons");

	const formatCurrency = (n: number) =>
		new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

	const imageMap: Record<string, string> = {
	"AK-74": "/ak-74.webp",
	"AKM": "/akm.jpg",
	"RPK": "/rpk.jpg",
	"M16A2": "/m16.jpg",
	"M249 SAW": "/saw.jpg",
	};

	return (
	<div className="min-h-screen bg-slate-900 hover:cursor-default">
		<div className="bg-slate-800">
			<div className="max-w-7xl mx-auto px-6 py-3.5">
			<h1 className="text-white text-lg font-semibold">Showcase</h1>
			</div>
		</div>

	<div className="max-w-7xl mx-auto px-6 py-8 ">
		{weapons.length === 0 ? (
		<p className="text-slate-400">No items found.</p>
		) : (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{weapons.map((weapon: { Weapon_ID: number; Weapon_Name: string; Weapon_Type: string; Weapon_Origin_Country: string; Weapon_Unit_Price: number }) => {
			const imageSrc = imageMap[weapon.Weapon_Name] ?? (weapon.Weapon_Type === "Ammunition" ? "/bullets.jpeg" : null);

			return (
				<div key={weapon.Weapon_ID} className="p-4 rounded-xl shadow-md bg-slate-800 hover:shadow-lg hover:cursor-pointer  transition-transform transform hover:-translate-y-1">
					<div className="relative w-full h-48 rounded-md overflow-hidden bg-slate-700">
					{imageSrc ? (
					<Image src={imageSrc} alt={weapon.Weapon_Name} width={600} height={360} className="object-cover w-full h-full" />
					) : (
					<div className="w-full h-full flex items-center justify-center text-slate-400">Image coming soon</div>
					)}
				</div>

				<div className="mt-4 flex items-start justify-between gap-4">
					<div>
						<h2 className="text-xl font-bold text-white">{weapon.Weapon_Name}</h2>
						<p className="text-sm text-slate-300 mt-1">Origin: {weapon.Weapon_Origin_Country}</p>
						<p className="text-sm mt-2">
						<span className="inline-block px-2 py-0.5 rounded-full bg-slate-700 text-xs text-slate-200">{weapon.Weapon_Type}</span>
						</p>
					</div>

					<div className="text-right">
						<div className="text-lg font-bold text-white">{formatCurrency(weapon.Weapon_Unit_Price)}</div>
					</div>
				</div>
				</div>
			);
			})}
		</div>
		)}
	</div>
	</div>
	);
}