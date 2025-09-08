"use client"
import { useRouter } from "next/navigation";
import {  useState } from "react"

export default function ImagePost() {
    const [file, setFile] = useState<File | null>();
    const [message, setMessage] = useState<string>("")
    const router = useRouter()

    async function handleSubmit() {
        
        if (!file) {
            setMessage("Please upload a file")
            console.log(message)
            return
        }
        if (!file.type.includes("image")) {
            setMessage("Please upload an image")
            console.log(message)
            return
        }
        const formdata = new FormData()
        formdata.append("image", file)
        try {
            const response = await fetch("http://localhost:3000/api/upload/image",
                {
                    method: "POST",
                    body: formdata,
                    
                }
            )
            const responseData = await response.json()
            if (response.status === 200) {
                setMessage("")
                router.refresh()
                setFile(null)
            } else {
                setMessage("try again!")
                return new Error(responseData.error)
            }
        } catch (err) {
            throw Error("something went wrong")
        }
    }
    return (
        <div className="w-80 sm:w-100 flex-col my-3 gap-2 mx-auto align-middle mt-15">
            <div className="h-32 w-full overflow-hidden relative  border-2 items-center rounded-2xl cursor-pointer border-gray-500 border-dotted shadow-2xl shadow-gray-900  ">
                <input type="file" id="image"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="h-full w-full opacity-100 z-10 absolute text-gray-400 p-2" />
                <div className="h-full w-full bg-neutral-900 absolute z-1 flex justify-center items-center top-0 ">
                    <div className="flex flex-col">
                        <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                        <span className="text-[12px] text-gray-400">{`Drag and Drop a file`}</span>
                    </div>
                </div>
            </div>
            
            <button type="submit" onClick={handleSubmit} className="bg-neutral-900 my-1.5 mx-30 sm:mx-45 p-1 px-1.5 border-2 font-bold border-gray-400 rounded-2xl shadow-xl shadow-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-300  hover:border-gray-300 active:bg-gray-900 active:text-gray-200 active:border-gray-200">upload </button>
        
        </div>
    )
}