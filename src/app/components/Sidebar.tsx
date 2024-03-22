"use client"
import { ChevronFirst } from "lucide-react";
import Image from "next/image";

export default function Sidebar({ children }) {
    return (
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <Image src="/new_logo.png" width={30} height={30} />
                        <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            <ChevronFirst />
                        </button>
                        {/* <p>IPUT Kernel</p> */}
                    </div>

                </nav>
                {/* <ul className="flex-1 px-3">{children}</ul> */}

            </aside>
        </>
    );
}
