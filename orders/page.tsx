import { query } from "@/lib/sqlDb"
import { MdCreateNewFolder } from "react-icons/md";
import { MdFolderDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import PopupButton from "@/components/ui/crud-modal";

export default async function OrderPage() {
	const orders = await query("SELECT Order_ID, Customer_ID, Seller_ID, Order_Date, Order_Status, Order_Total FROM Orders");

	const formatDate = (date?: Date | string | null) =>
		date ? new Date(date).toLocaleString() : "—";

	const formatCurrency = (number: number) =>
		new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(number);

	const statusClass = (Orderstatus: string) =>
	Orderstatus === "Completed" ? "bg-green-500 text-white" :
	Orderstatus === "Pending" ? "bg-yellow-400 text-black" :
	Orderstatus === "Paid" ? "bg-green-500 text-white" :
	Orderstatus === "Delayed" ? "bg-amber-500 text-white" :
	Orderstatus === "Shipped" ? "bg-blue-500 text-white" :
	Orderstatus === "Cancelled" ? "bg-red-500 text-white" : "bg-slate-500 text-white";

	return (
	<div>
		<div className="min-h-screen bg-slate-900">
			<div className="bg-slate-800">
				<div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between hover:cursor-default">
					<h1 className="text-white text-lg font-semibold ">Orders</h1>
					<PopupButton />
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-8">
			{orders.length === 0 ? (
				<p className="text-slate-400">No orders found.</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{orders.map((order: { Order_ID: number; Customer_ID: number; Seller_ID: number; Order_Date: Date | string; Order_Status: string; Order_Total: number }) => (
					<div
					key={order.Order_ID}
					className="p-4 rounded-xl shadow-md bg-slate-800 hover:shadow-lg transition-transform transform hover:-translate-y-1"
					>
					<div className="flex items-start justify-between gap-4">
						<div>
						<span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium hover:cursor-default ${statusClass(order.Order_Status)}`}>
							{order.Order_Status}
						</span>
						<p className="text-sm text-slate-300 mt-2 hover:cursor-default">{formatDate(order.Order_Date)}</p>
						<p className="text-xs text-slate-400 mt-1 hover:cursor-default">Order #{order.Order_ID} • Customer: {order.Customer_ID}</p>
						</div>

						<div className="text-right">
						<div className="text-lg font-bold text-white hover:cursor-default">{formatCurrency(order.Order_Total)}</div>
						<div className="flex items-center justify-end gap-2 mt-3">
							<button className="p-2 rounded-md hover:bg-red-600 hover:cursor-pointer text-red-400 hover:text-white transition">
							<MdFolderDelete className="w-5 h-5" />
							</button>
							<button className="p-2 rounded-md hover:bg-slate-700 text-blue-400 hover:text-white hover:cursor-pointer transition">
							<BiSolidEditAlt className="w-5 h-5" />
							</button>
						</div>
						</div>
					</div>
					</div>
				))}
				</div>
			)}
			</div>
		</div>
	</div>
	)
}