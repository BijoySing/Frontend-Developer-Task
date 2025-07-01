"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Apply the font className here for global font on navbar
        <header

        className={`${dmSans.className} w-[1280px] h-[76px] mb-0 mx-auto  top-0 bg-[#E9F6FF] z-50 border-b text-[#626262] rounded-t-4xl`}
        >
             <div className="w-[1108px] h-[76px] mx-auto flex bg-red-00 gap-4 items-center  justify-between px-4 sm:px-6 lg:px-8">

                <div className="mx-auto px-4 sm:px-6 lg: h-16 flex items-center justify-between gap-4">
                    {/* Left: Logo + Links */}
                    <div className="w-[468px] h-[30px] flex bg-amber-00 items-center gap-6">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="DayfBooking Logo"
                                width={90}
                                height={30}
                                priority
                            />
                        </Link>

                        <nav className="bg-[#E9F6FF] hidden md:flex items-center gap-4 text-md font-medium">
                            <Link href="#" className="hover:text-blue-600">
                                Home
                            </Link>
                            <Link href="#" className="hover:text-blue-600">
                                Hotels
                            </Link>
                            <Link href="#" className="hover:text-blue-600">
                                Offers
                            </Link>
                            <Link href="#" className="hover:text-blue-600">
                                About
                            </Link>
                            <Link href="#" className="hover:text-blue-600">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Right: Auth Actions */}
                    <div className="w-[576px] h-[18px] hidden md:flex items-center gap-1">
                        <div className="flex items-center border-2 border-[#A5D3F1] rounded-full px-3 py-2 gap-1">
                            <Image
                                src="/images/euro-circle.png"
                                alt="euro Circle"
                                width={24}
                                height={24}
                                priority

                            />
                            <Image
                                src="/images/arrow-down.png"
                                alt="arrow Down"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority

                            />
                        </div>
                        <div className="flex items-center border-2 border-[#A5D3F1] rounded-full px-3 py-2 gap-2">
                            <Image
                                src="/images/spain.png"
                                alt="Spain"
                                width={24}
                                height={24}
                                priority

                            />
                            <Image
                                src="/images/arrow-down.png"
                                alt="arrow Down"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority

                            />

                        </div>
                        <div className="flex items-center border-2 border-[#A5D3F1] rounded-full px-3 py-2 gap-2">
                            <p className="text-[#007DD0]">List your property</p>
                            <Image
                                src="/images/elements.png"
                                alt="elements"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <div className="bg-[#FFFFFF] flex items-center  rounded-full px-3 py-2 gap-2">
                            <Image
                                src="/images/notification-bubble.png"
                                alt="notification bubble"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <div className="bg-[#FFFFFF] flex items-center  rounded-full px-3 py-2 gap-2">
                            <Image
                                src="/images/User_light.png"
                                alt="user"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority
                            />
                            <p className="text-[#007DD0]">Sunan</p>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
                    <Link href="#" className="block text-sm hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="#" className="block text-sm hover:text-blue-600">
                        Hotels
                    </Link>
                    <Link href="#" className="block text-sm hover:text-blue-600">
                        Offers
                    </Link>
                    <Link href="#" className="block text-sm hover:text-blue-600">
                        About
                    </Link>
                    <Link href="#" className="block text-sm hover:text-blue-600">
                        Contact
                    </Link>
                    <div className="flex justify-around gap-2">
                        <div className="w-20 flex items-center border-2 border-[#A5D3F1] rounded-full px-3 py-2 gap-2">
                            <Image
                                src="/images/euro-circle.png"
                                alt="euro Circle"
                                width={24}
                                height={24}
                                priority
                            />
                            <Image
                                src="/images/arrow-down.png"
                                alt="arrow Down"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <div className="w-20 flex items-center border-2 border-[#A5D3F1] rounded-full px-3 py-2 gap-2">
                            <Image
                                src="/images/spain.png"
                                alt="Spain"
                                width={24}
                                height={24}
                                priority
                            />
                            <Image
                                src="/images/arrow-down.png"
                                alt="arrow Down"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <div className=" flex items-center border-2 border-[#A5D3F1] rounded-full px-3 py-2 gap-2">
                            <p className="text-[#007DD0]">List your property</p>
                            <Image
                                src="/images/elements.png"
                                alt="elements"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                    </div>
                    <div className="flex justify-around gap-2">
                        <div className="bg-[#FFFFFF] flex items-center  rounded-full px-3 py-2 gap-2">
                            <Image
                                src="/images/notification-bubble.png"
                                alt="notification bubble"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <div className="bg-[#FFFFFF] flex items-center  rounded-full px-3 py-2 gap-2">
                            <Image
                                src="/images/User_light.png"
                                alt="user"
                                color="#007DD0"
                                width={24}
                                height={24}
                                priority
                            />
                            <p className="text-[#007DD0]">Sunan</p>
                        </div>
                    </div>

                </div>
            )}
        </header>
    );
}
