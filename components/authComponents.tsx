"use client"
import { signOut, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
const SignOut = () => {
    const router = useRouter()
    return (
        <button onClick={async () => {
            await signOut({ redirect: false }) 
            router.push("/")
        }
        } className="cursor-pointer block">
            Signout
        </button>
    )
}
const SignIn = () => {
    return (
        <button onClick={() => signIn(undefined,{callbackUrl:"/home"})} className="bg-neutral-900 px-1.5 py-1 border-1 font-bold border-gray-400 rounded-2xl  text-gray-400 hover:bg-gray-500 cursor-pointer active:bg-gray-900 active:text-gray-200 active:border-gray-200 ">
            Signin
        </button>
    )
}

export { SignOut, SignIn }