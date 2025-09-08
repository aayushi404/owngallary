import { writeFile } from "fs/promises";
import fs from "fs/promises"
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import prisma from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    const data = await req.formData()
    const file: File | null = data.get('image') as unknown as File;
    if (!file) {
        return NextResponse.json({ error: 'No file found.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}-${file.name}`;
    await fs.mkdir(path.join(process.cwd(), 'public/uploads'));
    const dir = path.join(process.cwd(), 'public/uploads', userId)
    
    await fs.mkdir(dir, { recursive: true });
    
    const filePath = path.join(dir, filename);

    try {
        await writeFile(filePath, buffer);
        console.log(`File saved to ${filePath}`);

        const imageUrl = `/uploads/${userId}/${filename}`;
        await prisma.image.create({
            data: {
                image: imageUrl,
                userId:userId
            }
        })
        return NextResponse.json({
            message: 'Upload successful!',
            imageUrl: imageUrl,
        });

    } catch (error) {
        console.error('Error saving file:', error);
        return NextResponse.json(
            { message: 'Failed to save file.', error:error },
            { status: 500 }
        );
    }
}

