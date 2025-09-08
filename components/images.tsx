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
            throw new Error()
        }
    }
    return (
        <div className="mx-auto">
            <div className="flex flex-wrap">
                {images && images.map((image) => (
                    <div key={image.id} className="m-2 bg-neutral-900 shadow-2xl shadow-gray-900 rounded-2xl">
                        <div className="w-60 h-60">
                            <Image
                                src={image.image}
                                alt={`Image ${image.id}`}
                                width={200}
                                height={200}
                                className="rounded-2xl object-fill h-auto w-auto mx-auto"

                            />
                        </div>
                        <div>
                            <button onClick={() => handleOnDelete(image)}>Delete</button>
                        </div>
                    </div>
                        
                ))}
            </div>
        </div>
    )
}