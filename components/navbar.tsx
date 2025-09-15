"use client"
import Link from "next/link"
import Image from "next/image"
import { SignIn } from "./authComponents"
export default function Navbar() {
    return (
        <div className="sm:mx-0 mx-5 ">
            <nav className="flex justify-between max-w-200 sm:mx-auto border border-neutral-600 shadow-2xl shadow-neutral-800  h-12 p-2 rounded-2xl ">
                <Link href="/" className="flex gap-1">
                    <div>OwnGallary</div>
                    <div>
                        <Image src={"/icon.ico"} alt="icon" height={40} width={40} />
                    </div>
                </Link>
                <SignIn />
            </nav>
        </div>
    )
}