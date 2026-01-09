// import {ModeToggle} from "@/components/ui/theme-controller"
import { FaUser } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import Link from 'next/link'
import SignIn from "./loginbtn";



export const NavBar = () => {
    return (
        <div className="relative sticky top-0 w-full z-50 h-15 flex items-center justify-between px-4 font-bold shadow-md bg-linear-to-r from-green-400 to-blue-500 text-white opacity-95">
            <div className="flex items-center justify-start">
                <Link href="/"><FaWarehouse className="mr-1"/></Link>
                <Link href="/">WarDogsINC</Link>
            </div>

            <ul className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center ">
                <Link href="/sellers" className="mr-1 ml-1 ">Sellers</Link>
                <Link href="/showcase" className="mr-1 ml-1">Showcase</Link>
                <Link href="/orders" className="mr-1 ml-1">Orders</Link>
                <Link href="/contact" className="mr-1 ml-1">Contact</Link>
            </ul>

            <ul className="flex items-center justify-end">
                <div className="pr-1 h-6 w-6 flex items-center"><SignIn/></div>
            </ul>
        </div>
    )
}