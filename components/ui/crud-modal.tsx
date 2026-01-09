'use client';

import { useState } from 'react';
import { MdCreateNewFolder } from 'react-icons/md';
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

export default function PopupButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className=''>
        <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 hover:cursor-pointer text-white px-1 py-1 rounded-md"
            >
                <MdCreateNewFolder className="w-5 h-5" /> <p className="font-semibold">New</p>
        </button>

        {isOpen && (
        <div
        className="inset-0 z-50 flex items-center justify-center w-full h-full absolute top-0 backdrop-filter backdrop-brightness-95 backdrop-blur-md"
        >
            <div
                className="relative bg-slate-900 rounded-lg shadow px-16 w-3xl h-fit"
            >
                <div className="flex justify-end ">
                    <div
                        onClick={() => setIsOpen(false)}
                        className="rounded-full absolute top-2.5 right-2.5 bg-slate-800 px-1 py-1 hover:bg-slate-700 hover:cursor-pointer"
                    >
                        <IoCloseSharp className='w-4 h-4 text-red-500'/>
                    </div>
                </div>
                <div className=' justify-center my-10 rounded-lg p-4'>
                    <h1 className='text-lg font-bold text-white pb-2'>Create new order</h1>
                    <form>
                        <label className='block text-white text-sm font-bold mb-2'>Order Date:
                            <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline' placeholder='dd/mm/yyyy'/>
                        </label>
                        <label className='block text-white text-sm font-bold mb-2'>Order Status:
                            <input type='text'className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline' placeholder='Shipped'/>
                        </label>
                        <label className='block text-white text-sm font-bold mb-2'>Order Total:
                            <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline' placeholder='$$$$'/>
                        </label>
                    </form>
                </div>
                <div
                className="rounded-full absolute bottom-2.5 right-2.5 bg-slate-800 px-1 py-1 hover:bg-slate-700 hover:cursor-pointer"
                >
                    <IoMdCheckmark className='text-green-500' />
                </div>
            </div>
        </div>
    )}
    </div>
    );
};


