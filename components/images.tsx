"use client"
import { Image as MyImage } from "@prisma/client";
import Image from "next/image"
import { useRouter } from "next/navigation";

export default function Images({ images }: { images: MyImage[] | null }) {
    const router = useRouter()
    async function handleOnDelete(image:MyImage) {
        try {
            const response = await fetch("http://localhost:3000/api/delete/image", {
                method: "DELETE",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ image })
            })
            const data = await response.json()
            if (!response.ok) {
                console.log(data.message)
                throw Error(data.message)
            }
            router.refresh()
        } catch (err) {
            return err
        }
    }
    return (
        <div className="mx-auto">
            <div className="flex flex-wrap justify-center">
                {images && images.map((image) => (
                    <div key={image.id} className="m-2 bg-neutral-900 shadow-2xl shadow-gray-900 rounded-2xl flex-col items-center">
                        <div className="w-60 h-60">
                            <Image
                                src={image.image}
                                alt={`Image ${image.id}`}
                                width={200}
                                height={200}
                                className="rounded-2xl object-fill h-auto w-auto mx-auto"

                            />
                        </div>
                        <div className="flex justify-center py-2">
                            <button onClick={() => handleOnDelete(image)}
                            className="bg-neutral-900 p-1 px-1.5 border-2 font-bold border-gray-400 rounded-2xl shadow-xl shadow-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-300  hover:border-gray-300 active:bg-gray-900 active:text-gray-200 active:border-gray-200"
                            >Delete</button>
                        </div>
                    </div>
                        
                ))}
            </div>
        </div>
    )
}