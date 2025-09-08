import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Image as MyImage } from "@prisma/client"
import fs from 'fs/promises'
import path from "path";

export async function DELETE(req: NextRequest) {
    try {
        const imagedata = await req.json()
        if (!imagedata) {
            return NextResponse.json({message:"no image to delete"})
        }
        let fname = imagedata.image.image
        let fpath = path.join(process.cwd(), 'public', fname)
        await fs.unlink(fpath)
        console.log(`deleted the file ${fname}`)
        await prisma.image.delete({
            where:{
                id:imagedata.image.id
            }
        })
        let parentDir = path.join(process.cwd(), 'public/uploads', imagedata.image.userId)
        let files = await fs.readdir(parentDir)
        if (files.length === 0) {
            console.log(`${parentDir} is empty so deleting it`)
            await fs.rmdir(parentDir)
        }
        return NextResponse.json({message:"sucessfully deleted"})
    } catch (e) {
        return NextResponse.json({message:"something went wrong"})
        throw Error()
    }
}