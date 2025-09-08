import Images from "@/components/images"
import ImagePost from "@/components/image_post"
import { getServerSession } from "next-auth"
import prisma from "../lib/prisma"
import { authOptions } from "../lib/auth"
import { Header } from "@/components/header"
import {Image as MyImage} from "@prisma/client"

export default async function Home() {
    const session = await getServerSession(authOptions)
    let images = null; // Declare user variable
    if (session?.user) {
        try {
            images = await prisma.image.findMany({
                where: {
                    userId:session.user.id
                },
                orderBy: {
                    id:'desc'
                }
            })
            
        } catch (err) {
            return new Error()
        }
    }
    
    return (
        <div className="absolute">
            <Header authStatus={"authenticated"} session={session} />
            
            <ImagePost />
            <Images images={ images } />
        </div>
    )
}