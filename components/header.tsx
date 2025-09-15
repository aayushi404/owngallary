"use client"
import { SignIn, SignOut } from "./authComponents"

import Image from "next/image"
import {Session} from "next-auth"
import { useState } from "react"

type HeaderProps = {
    authStatus: string,
    session:Session | null
}
const Account = ({ session }: { session: Session }) => {
    const [panal, setPanal] = useState(false)
    
    return (
        <>
            {panal ?
                (<div className="absolute right-0 z-10 bg-neutral-900 rounded-2xl p-2 shadow-xl shadow-gray-900 text-gray-400 border border-gray-400">
                    <div className="flex gap-1 border-b pb-1 shadow-xl shadow-gray-900">
                        <Image src={session.user?.image} alt="profile" width={30} height={30} className="rounded-2xl shadow-2xl shadow-gray-900"/>
                        <span>{ session.user?.name}</span>
                    </div>
                    <div className="mx-1 mt-1 ">
                        <SignOut />
                    </div>
                </div>) :
                <div onClick={() => setPanal(!panal)}>
                    <Image src={session.user?.image} alt="profile" width={40} height={40} className="rounded-2xl"/>
                </div>}
        </>
    )
}
export const Header = ({authStatus, session}:HeaderProps) => {
    
    return (
        <div className="sm:mx-0 mx-5 ">
            <div className="flex justify-between border-1 h-12 sm:max-w-250 sm:mx-auto py-2 mx-5 px-3 rounded-b-2xl shadow-2xl shadow-gray-900 border-gray-400 bg-neutral-900">
                <div className=""><a href="/">
                    <Image src={"/icon.ico"} alt={"icon"} width={40} height={40} />
                    </a>
                </div>
                <div className="hover:border-b-gray-400 hover:border-b-2 h-5 text-gray-400"><a href="https://x.com/ayushitwt404">made with 🤍</a></div>
                <div className="cursor-pointer">
                    {authStatus === "authenticated" && session ? <Account session={session} /> : <SignIn />}
                </div>
            </div>
        </div>
    )
}