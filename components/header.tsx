"use client"

import { signOut, useSession, signIn } from "next-auth/react"
import Image from "next/image"
import {Session} from "next-auth"
import { useState } from "react"

const SignOut = () => {
    return (
        <button onClick={() => signOut()}>
            Signout
        </button>
    )
}
const SignIn = () => {
    return (
        <button onClick={() => signIn(undefined,{callbackUrl:"/home"})}>
            Signin
        </button>
    )
}
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
        <div className="flex justify-between border h-12 fixed z-20 w-full shadow-xl shadow-gray-900 bg-gray-950 opacity-1">
            <div>Icon</div>
            <div className="flex">
                <div>item1</div>
                <div>item2</div>
                <div>item3</div>
            </div>
            <div>
                {authStatus === "authenticated" && session ? <Account session={session} /> : <SignIn />}</div>
        </div>
    )
}